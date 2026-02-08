const { globby } = require('globby');
const fs = require('fs/promises');
const path = require('path');

async function relativizePaths() {
  console.log('🔧 Göreli yollar düzeltiliyor...');

  const files = await globby(['out/**/*.{html,css,js}']);
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
        // Göreli yolları mutlak yap (./_next/ -> /_next/)
        { regex: /href=["']\.\/_next\//g, replacement: 'href="/_next/' },
        { regex: /src=["']\.\/_next\//g, replacement: 'src="/_next/' },
        { regex: /href=["']\.\/images\//g, replacement: 'href="/images/' },
        { regex: /src=["']\.\/images\//g, replacement: 'src="/images/' },
        { regex: /href=["']\.\/videos\//g, replacement: 'href="/videos/' },
        { regex: /src=["']\.\/videos\//g, replacement: 'src="/videos/' },
        { regex: /href=["']\.\/favicon/g, replacement: 'href="/favicon' },
        { regex: /src=["']\.\/favicon/g, replacement: 'src="/favicon' },
        // CSS içinde göreli yolları mutlak yap
        { regex: /url\(["']?\.\/_next\//g, replacement: 'url("/_next/' },
        { regex: /url\(["']?\.\/images\//g, replacement: 'url("/images/' },
        { regex: /url\(["']?\.\/videos\//g, replacement: 'url("/videos/' },
        // @import göreli yolları mutlak yap
        { regex: /@import\s+["']\.\/_next\//g, replacement: '@import "/_next/' },
        { regex: /@import\s+["']\.\/images\//g, replacement: '@import "/images/' }
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
        console.log(`  ✓ ${path.relative('out', file)}`);
      }
    } catch (error) {
      console.error(`❌ Hata: ${file} - ${error.message}`);
    }
  }

  console.log(`✅ ${processedCount} dosya işlendi`);
}

relativizePaths().catch(console.error);
