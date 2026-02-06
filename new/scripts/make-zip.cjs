const { execSync } = require('node:child_process');
const { existsSync, statSync } = require('fs');

console.log('🗜️  ZIP dosyası oluşturuluyor...');

const sourceDir = 'deploy/hostinger_public_html';
const zipFile = 'deploy/hostinger_public_html.zip';

if (!existsSync(sourceDir)) {
  console.error(`❌ Kaynak klasör bulunamadı: ${sourceDir}`);
  process.exit(1);
}

try {
  // Windows için PowerShell kullan, Linux/Mac için zip komutu
  const isWindows = process.platform === 'win32';
  
  if (isWindows) {
    // Windows PowerShell ile ZIP oluştur
    const psCommand = `Compress-Archive -Path "${sourceDir}\\*" -DestinationPath "${zipFile}" -Force`;
    execSync(`powershell -Command "${psCommand}"`, { stdio: 'inherit' });
  } else {
    // Linux/Mac için zip komutu
    execSync(`cd deploy && zip -r hostinger_public_html.zip hostinger_public_html`, { stdio: 'inherit' });
  }
  
  if (existsSync(zipFile)) {
    const stats = statSync(zipFile);
    console.log(`✅ ZIP dosyası oluşturuldu: ${zipFile}`);
    console.log(`📊 ZIP boyutu: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);
  } else {
    console.error('❌ ZIP dosyası oluşturulamadı');
    process.exit(1);
  }
} catch (error) {
  console.error('❌ ZIP oluşturma hatası:', error.message);
  process.exit(1);
}