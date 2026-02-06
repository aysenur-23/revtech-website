#!/usr/bin/env node
/**
 * Turkish Character Encoding Checker
 * Checks all source files for proper UTF-8 encoding
 */

const fs = require('fs');
const path = require('path');
const chardet = require('chardet');

const EXTENSIONS = ['.js', '.ts', '.tsx', '.jsx', '.json', '.md', '.html', '.css'];
const DIRECTORIES = ['src', 'app', 'components', 'locales', 'public'];

let totalFiles = 0;
let utf8Files = 0;
let nonUtf8Files = [];
let turkishCharFiles = [];

function shouldCheck(file) {
  return EXTENSIONS.includes(path.extname(file).toLowerCase());
}

function hasTurkishChars(content) {
  const turkishChars = /[çğıöşüÇĞIİÖŞÜ]/;
  return turkishChars.test(content);
}

function walkDirectory(dir) {
  if (!fs.existsSync(dir)) {
    console.log(`⚠️  Directory not found: ${dir}`);
    return;
  }

  const entries = fs.readdirSync(dir);
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry);
    const stat = fs.lstatSync(fullPath);
    
    if (stat.isSymbolicLink()) continue;
    
    if (stat.isDirectory()) {
      walkDirectory(fullPath);
    } else if (stat.isFile() && shouldCheck(fullPath)) {
      checkFile(fullPath);
    }
  }
}

function checkFile(filePath) {
  try {
    totalFiles++;
    const buffer = fs.readFileSync(filePath);
    const encoding = chardet.detect(buffer) || 'unknown';
    const content = buffer.toString('utf8');
    
    if (encoding.toLowerCase().includes('utf-8')) {
      utf8Files++;
    } else {
      nonUtf8Files.push({ file: filePath, encoding });
    }
    
    if (hasTurkishChars(content)) {
      turkishCharFiles.push({ file: filePath, encoding });
    }
    
  } catch (error) {
    console.error(`❌ Error checking file ${filePath}:`, error.message);
  }
}

function main() {
  console.log('🔍 Turkish Character Encoding Checker');
  console.log('=====================================\n');
  
  for (const dir of DIRECTORIES) {
    console.log(`📁 Checking directory: ${dir}`);
    walkDirectory(dir);
  }
  
  console.log('\n📊 ENCODING CHECK RESULTS');
  console.log('========================');
  console.log(`Total files checked: ${totalFiles}`);
  console.log(`UTF-8 files: ${utf8Files}`);
  console.log(`Non-UTF-8 files: ${nonUtf8Files.length}`);
  console.log(`Files with Turkish characters: ${turkishCharFiles.length}`);
  
  if (nonUtf8Files.length > 0) {
    console.log('\n❌ NON-UTF-8 FILES:');
    nonUtf8Files.forEach(({ file, encoding }) => {
      console.log(`  ${file} (${encoding})`);
    });
  }
  
  if (turkishCharFiles.length > 0) {
    console.log('\n🇹🇷 FILES WITH TURKISH CHARACTERS:');
    turkishCharFiles.forEach(({ file, encoding }) => {
      console.log(`  ${file} (${encoding})`);
    });
  }
  
  if (nonUtf8Files.length === 0 && turkishCharFiles.length > 0) {
    console.log('\n✅ All files are properly UTF-8 encoded!');
    console.log('🎉 Turkish characters should display correctly.');
  } else if (nonUtf8Files.length > 0) {
    console.log('\n⚠️  Some files need encoding conversion.');
    console.log('💡 Run: npm run fix-encoding:src');
  }
}

main();
