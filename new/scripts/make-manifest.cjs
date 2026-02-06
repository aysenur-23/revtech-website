const { createHash } = require('crypto');
const { statSync, readdirSync, readFileSync, writeFileSync } = require('fs');
const path = require('path');

console.log('📋 Manifest dosyası oluşturuluyor...');

const root = 'deploy/hostinger_public_html';

function walk(dir) {
  let files = [];
  try {
    for (const item of readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, item.name);
      if (item.isDirectory()) {
        files = files.concat(walk(p));
      } else {
        files.push(p);
      }
    }
  } catch (error) {
    console.error(`❌ Klasör okunamadı: ${dir} - ${error.message}`);
  }
  return files;
}

const all = walk(root);
let total = 0;
const entries = all.map(p => {
  try {
    const rel = p.replace(`${root}/`, '');
    const buf = readFileSync(p);
    const size = statSync(p).size;
    total += size;
    const hash = createHash('sha256').update(buf).digest('hex');
    return { path: rel, size, sha256: hash };
  } catch (error) {
    console.error(`❌ Dosya işlenemedi: ${p} - ${error.message}`);
    return { path: p.replace(`${root}/`, ''), size: 0, sha256: 'error' };
  }
});

const out = {
  packageRoot: root,
  generatedAt: new Date().toISOString(),
  projectType: 'Next.js Static Export',
  totalFiles: entries.length,
  totalSize: total,
  files: entries,
  buildInfo: {
    nextVersion: '14.2.15',
    reactVersion: '18.2.0',
    buildMode: 'static-export',
    outputDirectory: 'out',
    assetPrefix: '',
    basePath: '',
    trailingSlash: false,
    imageOptimization: false,
    compression: true,
    minification: true
  },
  optimizations: {
    gzipEnabled: true,
    brotliEnabled: true,
    cacheHeaders: true,
    securityHeaders: true,
    spaRouting: true,
    mimeTypes: true
  },
  deployment: {
    target: 'Hostinger Shared Hosting',
    webServer: 'Apache',
    phpVersion: 'N/A',
    nodeVersion: 'N/A',
    staticFiles: true,
    htaccessRequired: true,
    sslRequired: true
  }
};

writeFileSync('deploy_manifest.json', JSON.stringify(out, null, 2));
console.log(`✅ Manifest oluşturuldu: ${entries.length} dosya, ${(total / 1024 / 1024).toFixed(2)} MB`);
