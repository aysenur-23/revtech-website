const fs = require('fs/promises');
const { cpSync, mkdirSync, writeFileSync } = require('fs');
const path = require('path');
const { globby } = require('globby');

async function copyToHostinger() {
  console.log('📦 Hostinger klasörüne kopyalanıyor...');

  const src = 'out';
  const dst = 'deploy/hostinger_public_html';

  // Hedef klasörü oluştur
  mkdirSync(dst, { recursive: true });

  // out/ klasörünü kopyala
  console.log('  📁 Dosyalar kopyalanıyor...');
  cpSync(src, dst, { recursive: true });

  // .htaccess dosyasını oluştur
  const htaccessContent = `# 403 Hatalarını Önleyen Temel Yapılandırma
DirectoryIndex index.html index.php
Options -Indexes

# Static dosyalar için doğrudan erişim
RewriteEngine On

# Static dosyaları doğrudan servis et
RewriteCond %{REQUEST_FILENAME} -f
RewriteRule ^(.*)$ - [L]

# TR routing - /tr/ ile başlayan istekleri tr/ klasörüne yönlendir
RewriteRule ^tr/(.*)$ /tr/$1 [L]

# TR olmadan istekleri tr/ klasöründeki dosyalara yönlendir
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} !^/tr/
RewriteRule ^(.*)$ /tr/$1 [L]

# Security Headers
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options nosniff
    Header always set X-Frame-Options DENY
    Header always set X-XSS-Protection "1; mode=block"
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
    Header always set Permissions-Policy "geolocation=(), microphone=(), camera=()"
</IfModule>

# Cache Control
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

# Compression
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
    AddOutputFilterByType DEFLATE image/svg+xml
</IfModule>

# MIME Types
<IfModule mod_mime.c>
  AddType application/javascript .js
  AddType text/css .css
  AddType image/webp .webp
    AddType font/woff .woff
  AddType font/woff2 .woff2
</IfModule>

# Error Documents
ErrorDocument 404 /404.html
ErrorDocument 500 /500.html`;

  writeFileSync(path.join(dst, '.htaccess'), htaccessContent);
  console.log('  📄 .htaccess dosyası oluşturuldu');

  // Dosya istatistiklerini topla
  const files = await globby([`${dst}/**/*`]);
  const stats = {
    totalFiles: files.length,
    totalSize: 0,
    fileTypes: {}
  };

  for (const file of files) {
    try {
      const stat = await fs.stat(file);
      if (stat.isFile()) {
        stats.totalSize += stat.size;
        const ext = path.extname(file).toLowerCase() || 'no-extension';
        stats.fileTypes[ext] = (stats.fileTypes[ext] || 0) + 1;
      }
    } catch (error) {
      // Dosya okunamadı, atla
    }
  }

  console.log(`✅ Kopyalama tamamlandı:`);
  console.log(`  📊 Toplam dosya: ${stats.totalFiles}`);
  console.log(`  💾 Toplam boyut: ${(stats.totalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`  📁 Dosya türleri:`, Object.entries(stats.fileTypes).map(([ext, count]) => `${ext}: ${count}`).join(', '));
}

copyToHostinger().catch(console.error);
