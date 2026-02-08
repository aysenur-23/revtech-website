/**
 * Video Optimizasyon Scripti
 * Hero video'yu optimize eder - kaliteyi koruyarak boyutu küçültür
 * 
 * Kullanım: node scripts/optimize-video.cjs
 * 
 * Gereksinimler:
 * - ffmpeg yüklü olmalı
 * - public/videos/hero.mp4 dosyası mevcut olmalı
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const videoPath = path.join(__dirname, '../public/videos/hero.mp4');
const outputPath = path.join(__dirname, '../public/videos/hero-optimized.mp4');
const backupPath = path.join(__dirname, '../public/videos/hero-backup.mp4');

function checkFFmpeg() {
  try {
    execSync('ffmpeg -version', { stdio: 'ignore' });
    return true;
  } catch (error) {
    return false;
  }
}

function getVideoInfo(videoPath) {
  try {
    const output = execSync(
      `ffmpeg -i "${videoPath}" 2>&1 | grep -E "(Duration|Stream)"`,
      { encoding: 'utf-8' }
    );
    return output;
  } catch (error) {
    return null;
  }
}

function optimizeVideo() {
  console.log('🎬 Video optimizasyonu başlatılıyor...\n');

  // FFmpeg kontrolü
  if (!checkFFmpeg()) {
    console.error('❌ FFmpeg bulunamadı!');
    console.log('📦 FFmpeg yüklemek için: https://ffmpeg.org/download.html');
    process.exit(1);
  }

  // Video dosyası kontrolü
  if (!fs.existsSync(videoPath)) {
    console.error(`❌ Video dosyası bulunamadı: ${videoPath}`);
    process.exit(1);
  }

  // Mevcut dosya boyutu
  const originalSize = fs.statSync(videoPath).size;
  const originalSizeMB = (originalSize / (1024 * 1024)).toFixed(2);
  console.log(`📊 Orijinal video boyutu: ${originalSizeMB} MB`);

  // Video bilgileri
  const videoInfo = getVideoInfo(videoPath);
  if (videoInfo) {
    console.log(`📹 Video bilgileri:\n${videoInfo}\n`);
  }

  // Yedek oluştur
  console.log('💾 Yedek oluşturuluyor...');
  if (fs.existsSync(backupPath)) {
    fs.unlinkSync(backupPath);
  }
  fs.copyFileSync(videoPath, backupPath);
  console.log('✅ Yedek oluşturuldu\n');

  // Optimizasyon komutu - Performans için agresif optimizasyon
  // Video kaslanmasını önlemek için:
  // 1. Çözünürlüğü 1280x720'e düşür (mobil ve desktop için yeterli, daha hafif)
  // 2. Video bitrate'ini 2Mbps'e düşür (orijinal: ~9.3Mbps) - çok daha hafif
  // 3. Audio bitrate'ini 64kbps'e düşür
  // 4. Faststart ekle (web için optimize)
  // 5. FPS'i 24'e düşür (30fps yerine, daha hafif)
  // 6. Preset: fast (hızlı encoding, daha az CPU kullanımı)
  // 7. CRF: 30 (daha agresif sıkıştırma, boyutu çok azaltır)
  
  // Basit ve güvenilir yaklaşım: Mevcut codec ile çözünürlüğü düşür
  // Video filter ile çözünürlüğü düşür, FPS'i azalt, bitrate'i sınırla
  // Eğer libx264 yoksa, mevcut codec'i kopyala (sadece çözünürlük ve FPS değişir)
  const command = `ffmpeg -i "${videoPath}" -vf "scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2,fps=24" -c:v libopenh264 -b:v 2M -maxrate 2M -bufsize 4M -c:a aac -b:a 64k -movflags +faststart -y "${outputPath}"`;

  console.log('⚙️  Video optimize ediliyor (bu işlem birkaç dakika sürebilir)...\n');
  console.log('📝 Komut:', command.replace(/\s+/g, ' '), '\n');

  try {
    execSync(command, { stdio: 'inherit' });
    
    // Optimize edilmiş dosya boyutu
    if (fs.existsSync(outputPath)) {
      const optimizedSize = fs.statSync(outputPath).size;
      const optimizedSizeMB = (optimizedSize / (1024 * 1024)).toFixed(2);
      const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
      const savingsMB = ((originalSize - optimizedSize) / (1024 * 1024)).toFixed(2);

      console.log('\n✅ Video optimizasyonu tamamlandı!');
      console.log(`📊 Optimize edilmiş boyut: ${optimizedSizeMB} MB`);
      console.log(`💾 Tasarruf: ${savingsMB} MB (${savings}%)`);

      // Orijinal dosyayı değiştir
      console.log('\n🔄 Orijinal dosya değiştiriliyor...');
      fs.unlinkSync(videoPath);
      fs.renameSync(outputPath, videoPath);
      console.log('✅ Video optimize edildi ve güncellendi!');
      console.log(`💾 Yedek dosya: ${backupPath}`);
    } else {
      console.error('❌ Optimize edilmiş video oluşturulamadı!');
      process.exit(1);
    }
  } catch (error) {
    console.error('❌ Video optimizasyonu başarısız:', error.message);
    console.log('\n💡 İpucu: Video dosyası çok büyükse, daha düşük çözünürlük deneyin:');
    console.log('   ffmpeg -i input.mp4 -vf scale=1920:1080 -c:v libx264 -preset slow -crf 23 output.mp4');
    process.exit(1);
  }
}

// Script çalıştır
if (require.main === module) {
  optimizeVideo();
}

module.exports = { optimizeVideo };

