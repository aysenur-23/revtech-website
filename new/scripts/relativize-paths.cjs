const { globby } = require('globby');
const fs = require('fs/promises');

async function main() {
  console.log('🔧 Göreli yollar düzeltiliyor...');

  const roots = ['out', 'dist', 'build', 'deploy/hostinger_public_html'];
  let base = null;

  // Hangi klasörün mevcut olduğunu bul
  for (const root of roots) {
    try {
      await fs.access(root);
      base = root;
      break;
    } catch (error) {
      // Klasör yok, devam et
    }
  }

  if (!base) {
    console.error('❌ Hiçbir build klasörü bulunamadı!');
    process.exit(1);
  }

  console.log(`📁 İşlenen klasör: ${base}`);

  const files = await globby([`${base}/**/*.{html,css,js}`]);
  let processedCount = 0;

  for (const file of files) {
    try {
      let content = await fs.readFile(file, 'utf8');
      let modified = false;
      
      // HTML/CSS/JS içindeki mutlak yolları göreli yap
      // /_next/ -> ./_next/
      // /images/ -> ./images/
      // /videos/ -> ./videos/
      // /favicon -> ./favicon
      // /apple-touch-icon -> ./apple-touch-icon
      // /robots.txt -> ./robots.txt
      // /sitemap.xml -> ./sitemap.xml
      
      const patterns = [
        // href="/..." -> href="./..."
        { regex: /href=["']\/(?!\/)/g, replacement: 'href="./' },
        // src="/..." -> src="./..."
        { regex: /src=["']\/(?!\/)/g, replacement: 'src="./' },
        // url("/...") -> url("./...")
        { regex: /url\(["']?\/(?!\/)/g, replacement: 'url("./' },
        // @import "/..." -> @import "./..."
        { regex: /@import\s+["']\/(?!\/)/g, replacement: '@import "./' },
        // CSS içinde / ile başlayan yollar
        { regex: /(["'])\/(?!\/)([^"']*)\1/g, replacement: '$1./$2$1' }
      ];
      
      for (const { regex, replacement } of patterns) {
        const newContent = content.replace(regex, replacement);
        if (newContent !== content) {
          content = newContent;
          modified = true;
        }
      }
      
      if (modified) {
        await fs.writeFile(file, content, 'utf8');
        processedCount++;
        console.log(`  ✓ ${file.replace(`${base}/`, '')}`);
      }
    } catch (error) {
      console.error(`❌ Hata: ${file} - ${error.message}`);
    }
  }

  console.log(`✅ ${processedCount} dosya işlendi`);
}

main().catch(console.error);
