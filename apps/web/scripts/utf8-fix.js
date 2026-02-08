// scripts/utf8-fix.js
/* Scan and convert non-UTF8 files to UTF-8 (no BOM) */
const fs = require('fs');
const path = require('path');
const chardet = require('chardet');
const iconv = require('iconv-lite');

const ROOTS = ['app','pages','components','public','content','data','i18n','styles','src'];
const EXTS  = ['.js','.ts','.tsx','.jsx','.json','.md','.mdx','.html','.css','.svg','.txt','.xml'];

let scanned = 0, converted = 0, skipped = 0;

function shouldProcess(file) {
  return EXTS.includes(path.extname(file).toLowerCase());
}

function walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir)) {
    const p = path.join(dir, entry);
    const stat = fs.lstatSync(p);
    if (stat.isSymbolicLink()) continue;
    if (stat.isDirectory()) walk(p);
    else if (stat.isFile() && shouldProcess(p)) processFile(p);
  }
}

function processFile(file) {
  try {
    scanned++;
    const buf = fs.readFileSync(file);
    const enc = chardet.detect(buf) || 'UTF-8';
    if (enc.toUpperCase().includes('UTF-8')) { skipped++; return; }
    const text = iconv.decode(buf, enc);
    const utf8 = iconv.encode(text, 'UTF-8');
    fs.writeFileSync(file, utf8); // no BOM
    converted++;
    console.log(`Converted: ${file} (${enc} -> UTF-8)`);
  } catch (e) {
    console.error('Encoding fix failed:', file, e.message);
  }
}

(function main(){
  console.log('🔍 UTF-8 Standardization başlatılıyor...');
  for (const root of ROOTS) walk(path.join(process.cwd(), root));
  console.log(`✅ UTF-8 FIX SUMMARY -> scanned: ${scanned}, converted: ${converted}, skipped: ${skipped}`);
})();
