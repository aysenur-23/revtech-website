/**
 * Build çıktısını (out/) public_html klasörüne kopyalar ve .htaccess ekler.
 * Kullanım: Önce "pnpm build" çalıştırın, sonra "pnpm run prepare-public-html"
 */
const { cpSync, mkdirSync, writeFileSync, existsSync } = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const outDir = path.join(root, 'out');
const deployDir = path.join(root, 'deploy', 'public_html_backup');
const dst = path.join(root, 'public_html');

const src = existsSync(outDir) ? outDir : (existsSync(deployDir) ? deployDir : null);
if (!src) {
  console.error('❌ "out" veya "deploy/eskipublic_html" bulunamadı. Önce "pnpm build" çalıştırın.');
  process.exit(1);
}
if (src === deployDir) {
  console.log('  ℹ out yok; deploy/eskipublic_html kullanılıyor.');
}

console.log('📦 public_html klasörü hazırlanıyor...');
mkdirSync(dst, { recursive: true });
cpSync(src, dst, { recursive: true });

const htaccessContent = `# 403 Hatalarını Önleyen Temel Yapılandırma
DirectoryIndex index.html index.php
Options -Indexes

# Static dosyalar için doğrudan erişim
RewriteEngine On

# Static dosyaları doğrudan servis et
RewriteCond %{REQUEST_FILENAME} -f
RewriteRule ^(.*)$ - [L]

# TR routing - /tr/ ile başlayan istekleri tr/ klasörüne yönlendir
RewriteRule ^tr/(.*)$ tr/$1 [L]

# TR olmadan istekleri tr/ klasöründeki dosyalara yönlendir
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} !^/tr/
RewriteRule ^(.*)$ tr/$1 [L]

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
ErrorDocument 500 /500.html
`;

writeFileSync(path.join(dst, '.htaccess'), htaccessContent);
console.log('  📄 .htaccess yazıldı');
console.log('✅ public_html klasörü hazır: ' + dst);
