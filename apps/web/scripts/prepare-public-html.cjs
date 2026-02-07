/**
 * Build çıktısını (out/) public_html klasörüne kopyalar ve Hostinger için .htaccess ekler.
 * TR, EN, AR dilleri korunur; kök (/) varsayılan olarak /tr/ yönlendirilir.
 * Kullanım: Önce "pnpm build" çalıştırın, sonra "pnpm run prepare-public-html"
 * Veya tek komut: "pnpm run deploy:hostinger"
 */
const { cpSync, mkdirSync, writeFileSync, existsSync, readdirSync } = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const outDir = path.join(root, 'out');
const deployDir = path.join(root, 'deploy', 'public_html_backup');
const dst = path.join(root, 'public_html');

const src = existsSync(outDir) ? outDir : (existsSync(deployDir) ? deployDir : null);
if (!src) {
  console.error('❌ "out" bulunamadı. Önce "pnpm build" çalıştırın.');
  process.exit(1);
}
if (src === deployDir) {
  console.log('  ℹ out yok; deploy/public_html_backup kullanılıyor.');
}

console.log('📦 public_html klasörü hazırlanıyor...');
if (existsSync(dst)) {
  const { rmSync } = require('fs');
  rmSync(dst, { recursive: true });
}
mkdirSync(dst, { recursive: true });
cpSync(src, dst, { recursive: true });

// Kök için index.html: ziyaretçiyi varsayılan dile (tr) yönlendir
const defaultLocale = 'tr';
const indexHtml = `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="0;url=/${defaultLocale}/">
  <link rel="canonical" href="/${defaultLocale}/">
  <title>Yönlendiriliyor...</title>
  <script>window.location.replace("/${defaultLocale}/");</script>
</head>
<body>
  <p><a href="/${defaultLocale}/">Türkçe</a> | <a href="/en/">English</a> | <a href="/ar/">العربية</a></p>
  <p>Yönlendiriliyor...</p>
</body>
</html>
`;
writeFileSync(path.join(dst, 'index.html'), indexHtml, 'utf8');

const htaccessContent = `# Hostinger - Revium Static Site (TR/EN/AR)
# Node.js yok; tamamen statik HTML/CSS/JS

AddDefaultCharset UTF-8
AddCharset UTF-8 .html .htm .css .js .json .xml .txt

# Dizin listelemeyi kapat
Options -Indexes
DirectoryIndex index.html

# Mevcut dosya/klasör varsa doğrudan servis et
RewriteEngine On
RewriteBase /

# Dosya veya dizin fiziksel olarak varsa dokunma
RewriteCond %{REQUEST_FILENAME} -f
RewriteRule ^ - [L]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]

# Trailing slash - /tr/kurumsal isteği -> /tr/kurumsal/index.html (zaten Next export böyle üretir)
# Ekstra kural gerekmez; Apache DirectoryIndex index.html halleder

# 404 - Next.js export 404.html üretiyorsa kullan
ErrorDocument 404 /404.html

# UTF-8 ve güvenlik başlıkları
<IfModule mod_headers.c>
  Header always set X-Content-Type-Options "nosniff"
  Header always set X-Frame-Options "SAMEORIGIN"
  Header always set X-XSS-Protection "1; mode=block"
  Header always set Referrer-Policy "strict-origin-when-cross-origin"
  Header always set Permissions-Policy "geolocation=(), microphone=(), camera=()"
</IfModule>

# Önbellek - statik varlıklar
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType font/woff "access plus 1 year"
  ExpiresByType font/woff2 "access plus 1 year"
  ExpiresByType text/html "access plus 1 hour"
</IfModule>

# Sıkıştırma
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/plain
  AddOutputFilterByType DEFLATE text/html
  AddOutputFilterByType DEFLATE text/xml
  AddOutputFilterByType DEFLATE text/css
  AddOutputFilterByType DEFLATE application/xml
  AddOutputFilterByType DEFLATE application/xhtml+xml
  AddOutputFilterByType DEFLATE application/rss+xml
  AddOutputFilterByType DEFLATE application/javascript
  AddOutputFilterByType DEFLATE application/x-javascript
  AddOutputFilterByType DEFLATE application/json
  AddOutputFilterByType DEFLATE image/svg+xml
</IfModule>

# MIME
<IfModule mod_mime.c>
  AddType application/javascript .js
  AddType text/css .css
  AddType image/webp .webp
  AddType font/woff .woff
  AddType font/woff2 .woff2
</IfModule>
`;

writeFileSync(path.join(dst, '.htaccess'), htaccessContent, 'utf8');
console.log('  📄 .htaccess yazıldı');

// Doğrulama: tr, en, ar klasörleri var mı?
const hasTr = existsSync(path.join(dst, 'tr'));
const hasEn = existsSync(path.join(dst, 'en'));
const hasAr = existsSync(path.join(dst, 'ar'));
console.log('  📁 tr:', hasTr ? '✓' : '✗', ' en:', hasEn ? '✓' : '✗', ' ar:', hasAr ? '✓' : '✗');

// Opsiyonel: deploy/public_html.zip oluştur (Hostinger’a tek dosya yüklemek için)
const zipOut = path.join(root, 'deploy', 'public_html.zip');
if (process.env.CREATE_ZIP === '1' || process.argv.includes('--zip')) {
  const { execSync } = require('child_process');
  const { mkdirSync } = require('fs');
  mkdirSync(path.join(root, 'deploy'), { recursive: true });
  try {
    if (process.platform === 'win32') {
      execSync(`powershell -Command "Compress-Archive -Path '${dst.replace(/\\/g, '\\\\')}\\\\*' -DestinationPath '${zipOut.replace(/\\/g, '\\\\')}' -Force"`, { stdio: 'inherit' });
    } else {
      execSync(`cd "${root}" && zip -r deploy/public_html.zip public_html`, { stdio: 'inherit' });
    }
    console.log('  📦 ZIP: ' + zipOut);
  } catch (e) {
    console.log('  ⚠ ZIP atlandı:', e.message);
  }
}

console.log('✅ public_html hazır: ' + dst);
console.log('   Hostinger: Bu klasörün içeriğini sunucudaki public_html ile değiştirin.');
console.log('   ZIP için: node scripts/prepare-public-html.cjs --zip');