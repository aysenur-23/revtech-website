const { globby } = require('globby');
const fs = require('fs/promises');
const path = require('path');
const sharp = require('sharp');

async function optimizeImages() {
  console.log('🖼️  Görsel optimizasyonu başlatılıyor...');

  const imageFiles = await globby(['out/images/**/*.{jpg,jpeg,png}']);
  let optimizedCount = 0;
  let totalSavings = 0;

  for (const file of imageFiles) {
    try {
      const originalStats = await fs.stat(file);
      const originalSize = originalStats.size;
      
      // 200KB'den büyük dosyaları optimize et
      if (originalSize > 200 * 1024) {
        const ext = path.extname(file).toLowerCase();
        const baseName = path.basename(file, ext);
        const dir = path.dirname(file);
        
        // Orijinal dosyayı yedekle
        const backupFile = path.join(dir, `${baseName}.original${ext}`);
        await fs.copyFile(file, backupFile);
        
        // Sharp ile optimize et
        const image = sharp(file);
        const metadata = await image.metadata();
        
        let optimizedImage;
        if (ext === '.png') {
          // PNG için lossless sıkıştırma
          optimizedImage = image.png({ 
            compressionLevel: 9,
            adaptiveFiltering: true,
            force: true
          });
        } else {
          // JPEG için yüksek kalite sıkıştırma
          optimizedImage = image.jpeg({ 
            quality: 85,
            progressive: true,
            mozjpeg: true
          });
        }
        
        // Geçici dosyaya yaz, sonra orijinali değiştir
        const tempFile = path.join(dir, `${baseName}.temp${ext}`);
        await optimizedImage.toFile(tempFile);
        
        // Geçici dosyayı orijinal dosyayla değiştir
        await fs.unlink(file);
        await fs.rename(tempFile, file);
        
        // WebP versiyonu oluştur
        const webpFile = path.join(dir, `${baseName}.webp`);
        await image.webp({ quality: 85 }).toFile(webpFile);
        
        const newStats = await fs.stat(file);
        const newSize = newStats.size;
        const savings = originalSize - newSize;
        
        if (savings > 0) {
          optimizedCount++;
          totalSavings += savings;
          console.log(`  ✓ ${path.relative('out', file)}: ${(originalSize/1024).toFixed(1)}KB → ${(newSize/1024).toFixed(1)}KB (${(savings/1024).toFixed(1)}KB tasarruf)`);
          console.log(`    📄 WebP: ${path.relative('out', webpFile)}`);
        } else {
          // Optimizasyon fayda sağlamadı, orijinali geri yükle
          await fs.copyFile(backupFile, file);
          await fs.unlink(backupFile);
          await fs.unlink(webpFile);
        }
      }
    } catch (error) {
      console.error(`❌ Hata: ${file} - ${error.message}`);
    }
  }

  console.log(`✅ Görsel optimizasyonu tamamlandı:`);
  console.log(`  🖼️  Optimize edilen dosya: ${optimizedCount}`);
  console.log(`  💾 Toplam tasarruf: ${(totalSavings / 1024).toFixed(1)} KB`);
}

optimizeImages().catch(console.error);
