const { globby } = require('globby');
const fs = require('fs/promises');
const path = require('path');
const sharp = require('sharp');

async function optimizeImages() {
  console.log('🖼️  Görsel optimizasyonu başlatılıyor...');

  const imageFiles = await globby(['out/images/**/*.{jpg,jpeg,png}']);
  let optimizedCount = 0;
  let totalSavings = 0;

  // .original ve .temp uzantılı dosyaları filtrele
  const filesToProcess = imageFiles.filter(file => {
    const basename = path.basename(file, path.extname(file)); // Uzantı olmadan dosya adı
    const ext = path.extname(file);
    // .original veya .temp içeren dosyaları atla
    return !basename.endsWith('.original') && !basename.endsWith('.temp') && 
           !file.includes('.original.') && !file.includes('.temp.');
  });

  console.log(`  📊 Toplam ${imageFiles.length} dosya bulundu, ${filesToProcess.length} dosya işlenecek`);

  for (const file of filesToProcess) {
    let backupFile = null;
    let tempFile = null;
    let webpFile = null;
    
    try {
      const originalStats = await fs.stat(file);
      const originalSize = originalStats.size;
      
      // 200KB'den büyük dosyaları optimize et
      if (originalSize > 200 * 1024) {
        const ext = path.extname(file).toLowerCase();
        const baseName = path.basename(file, ext);
        const dir = path.dirname(file);
        
        // Orijinal dosyayı yedekle
        backupFile = path.join(dir, `${baseName}.original${ext}`);
        tempFile = path.join(dir, `${baseName}.temp${ext}`);
        webpFile = path.join(dir, `${baseName}.webp`);
        
        // Yedek dosya zaten varsa, önce onu sil
        try {
          await fs.access(backupFile);
          await fs.unlink(backupFile);
        } catch {
          // Yedek dosya yoksa devam et
        }
        
        // Yedek dosyayı oluştur (Windows dosya kilitleme sorunları için retry mekanizması)
        let copySuccess = false;
        for (let retry = 0; retry < 3; retry++) {
          try {
            await fs.copyFile(file, backupFile);
            copySuccess = true;
            break;
          } catch (copyError) {
            if (retry === 2) {
              // Son deneme de başarısız, dosyayı atla
              throw new Error(`Yedek dosya oluşturulamadı: ${copyError.message}`);
            }
            // Kısa bir bekleme sonrası tekrar dene
            await new Promise(resolve => setTimeout(resolve, 100 * (retry + 1)));
          }
        }
        
        if (!copySuccess) {
          continue; // Bu dosyayı atla
        }
        
        // Sharp ile optimize et
        const image = sharp(backupFile); // Yedek dosyadan oku
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
        
        // Geçici dosyaya yaz
        await optimizedImage.toFile(tempFile);
        
        // Geçici dosyanın boyutunu kontrol et
        const tempStats = await fs.stat(tempFile);
        const newSize = tempStats.size;
        const savings = originalSize - newSize;
        
        if (savings > 0) {
          // Optimizasyon başarılı, dosyaları değiştir
          await fs.unlink(file);
          await fs.rename(tempFile, file);
          
          // WebP versiyonu oluştur
          await sharp(backupFile).webp({ quality: 85 }).toFile(webpFile);
          
          optimizedCount++;
          totalSavings += savings;
          console.log(`  ✓ ${path.relative('out', file)}: ${(originalSize/1024).toFixed(1)}KB → ${(newSize/1024).toFixed(1)}KB (${(savings/1024).toFixed(1)}KB tasarruf)`);
          console.log(`    📄 WebP: ${path.relative('out', webpFile)}`);
          
          // Yedek dosyayı temizle
          try {
            await fs.unlink(backupFile);
          } catch {
            // Sessizce yoksay
          }
        } else {
          // Optimizasyon fayda sağlamadı, temizlik yap
          try {
            await fs.unlink(tempFile);
          } catch {
            // Sessizce yoksay
          }
          try {
            await fs.unlink(backupFile);
          } catch {
            // Sessizce yoksay
          }
        }
      }
    } catch (error) {
      // .original dosyası ile ilgili ENOENT hatalarını atla (normal durum)
      const isOriginalFileError = error.message.includes('.original') && error.message.includes('ENOENT');
      
      if (!isOriginalFileError) {
        console.error(`❌ Hata: ${path.relative('out', file)} - ${error.message}`);
      }
      
      // Hata durumunda temizlik yap
      try {
        if (tempFile) {
          await fs.unlink(tempFile);
        }
      } catch {
        // Sessizce yoksay
      }
      
      try {
        if (webpFile) {
          await fs.unlink(webpFile);
        }
      } catch {
        // Sessizce yoksay
      }
      
      // Orijinal dosyayı geri yükle (sadece yedek dosya varsa)
      if (backupFile) {
        try {
          await fs.access(backupFile);
          await fs.copyFile(backupFile, file);
          await fs.unlink(backupFile);
        } catch (restoreError) {
          // Yedek dosya yoksa veya geri yükleme başarısızsa, sessizce atla
          // Bu normal bir durum olabilir (dosya zaten optimize edilmiş olabilir)
        }
      }
    }
  }

  console.log(`✅ Görsel optimizasyonu tamamlandı:`);
  console.log(`  🖼️  Optimize edilen dosya: ${optimizedCount}`);
  console.log(`  💾 Toplam tasarruf: ${(totalSavings / 1024).toFixed(1)} KB`);
}

optimizeImages().catch(console.error);
