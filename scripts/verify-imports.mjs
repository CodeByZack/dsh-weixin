#!/usr/bin/env node
// 验证所有相对 import 路径都能解析到实际文件
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const files = [];

function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith('.mjs')) files.push(full);
  }
}
walk(root);

const importRegex = /from\s+['"]([^'"]+)['"]/g;
const dynamicImportRegex = /import\s*\(\s*['"]([^'"]+)['"]\s*\)/g;

let missing = 0;
const report = [];

for (const file of files) {
  const content = readFileSync(file, 'utf8');
  const matches = [...content.matchAll(importRegex), ...content.matchAll(dynamicImportRegex)];
  for (const m of matches) {
    const target = m[1];
    if (target.startsWith('node:') || target === 'qrcode') continue;
    if (!target.startsWith('.')) continue;  // 只看相对导入
    const resolved = resolve(dirname(file), target);
    if (!existsSync(resolved)) {
      missing += 1;
      report.push(`  ✗ ${file.replace(root + '/', '')}\n      → ${target}\n      resolves to ${resolved.replace(root + '/', '')}`);
    }
  }
}

console.log(`扫描 ${files.length} 个 .mjs 文件`);
if (missing === 0) {
  console.log('✅ 所有相对 import 路径均能解析');
} else {
  console.log(`❌ ${missing} 个 import 无法解析:\n`);
  for (const r of report) console.log(r);
  process.exit(1);
}
