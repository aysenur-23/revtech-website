const { execSync } = require('node:child_process');
const { mkdirSync, existsSync } = require('fs');
const path = require('path');
const { globby } = require('globby');
const crypto = require('crypto');
const fs = require('fs/promises');

async function makeZip() {
  console.log('🗜️  ZIP dosyası oluşturuluyor...');

  const deployDir = 'deploy';
  const sourceDir = 'deploy/hostinger_public_html';
  const zipFile = 'deploy/hostinger_public_html.zip';

  // Deploy klasörünü oluştur
  mkdirSync(deployDir, { recursive: true });

  // ZIP oluştur
  try {
    // Windows için PowerShell kullan, Linux/Mac için zip komutu
    const isWindows = process.platform === 'win32';
    
    if (isWindows) {
      // Windows PowerShell ile ZIP oluştur
      const psCommand = `Compress-Archive -Path "${sourceDir}\\*" -DestinationPath "${zipFile}" -Force`;
      execSync(`powershell -Command "${psCommand}"`, { stdio: 'inherit' });
    } else {
      // Linux/Mac için zip komutu
      execSync(`cd ${deployDir} && zip -r hostinger_public_html.zip hostinger_public_html`, { stdio: 'inherit' });
    }
    
    console.log('✅ ZIP dosyası oluşturuldu:', zipFile);
  } catch (error) {
    console.error('❌ ZIP oluşturma hatası:', error.message);
    process.exit(1);
  }

  // Manifest dosyası oluştur
  console.log('📋 Manifest dosyası oluşturuluyor...');

  const files = await globby([`${sourceDir}/**/*`]);
  const manifest = {
    buildDate: new Date().toISOString(),
    projectType: 'Next.js Static Export',
    totalFiles: files.length,
    totalSize: 0,
    files: [],
    checksums: {}
  };

  for (const file of files) {
    try {
      const stat = await fs.stat(file);
      if (stat.isFile()) {
        const relativePath = path.relative(sourceDir, file);
        const content = await fs.readFile(file);
        const hash = crypto.createHash('sha256').update(content).digest('hex');
        
        manifest.totalSize += stat.size;
        manifest.files.push({
          path: relativePath,
          size: stat.size,
          modified: stat.mtime.toISOString()
        });
        manifest.checksums[relativePath] = hash;
      }
    } catch (error) {
      console.warn(`⚠️  Dosya okunamadı: ${file}`);
    }
  }

  // ZIP dosyasının boyutunu al
  try {
    const zipStat = await fs.stat(zipFile);
    manifest.zipSize = zipStat.size;
  } catch (error) {
    manifest.zipSize = 0;
  }

  // Manifest'i kaydet
  const manifestPath = path.join(deployDir, 'deploy_manifest.json');
  await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2));

  console.log('✅ Manifest dosyası oluşturuldu:', manifestPath);
  console.log(`📊 Özet:`);
  console.log(`  📁 Toplam dosya: ${manifest.totalFiles}`);
  console.log(`  💾 Kaynak boyut: ${(manifest.totalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`  🗜️  ZIP boyut: ${(manifest.zipSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`  📈 Sıkıştırma oranı: ${((1 - manifest.zipSize / manifest.totalSize) * 100).toFixed(1)}%`);
}

makeZip().catch(console.error);
