#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 Development server başlatılıyor...');

// Next.js development server'ı başlat
const nextDev = spawn('npx', ['next', 'dev', '-p', '3002'], {
  cwd: __dirname,
  stdio: 'inherit',
  shell: true
});

nextDev.on('error', (err) => {
  console.error('❌ Server başlatılamadı:', err);
});

nextDev.on('close', (code) => {
  console.log(`📝 Server kapatıldı, kod: ${code}`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Server kapatılıyor...');
  nextDev.kill('SIGINT');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Server kapatılıyor...');
  nextDev.kill('SIGTERM');
  process.exit(0);
});
