#!/usr/bin/env node
// Audit the PACKED contents of this package, not the working tree.
//
// The point of auditing the tarball rather than package.json is that npm may
// keep a manifest field while omitting the file it points at - which is exactly
// what the retired `bin` field did: the declaration survived the pack, the file
// did not, and installers got a shim pointing at nothing.
//
// Usage:
//   npm pack --silent | tail -n1 > .audit/tarball.txt
//   tar -xzf "$(cat .audit/tarball.txt)" -C .audit
//   node scripts/audit-tarball.mjs .audit/package "$(cat .audit/tarball.txt)" [expected-version]
//
// <extracted-package-dir> is the package root as extracted: npm's tarball root
// is `package/`, so pass `.audit/package` after the extract above.
// [expected-version] is the GitHub release tag; pass it so a mistagged release
// cannot publish the wrong version.
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { basename, isAbsolute, join, resolve } from 'node:path';

const argv = process.argv.slice(2);
const [unpackedArg, tarballName, expected] = argv;
if (!unpackedArg || !tarballName) {
  console.error('usage: audit-tarball.mjs <extracted-package-dir> <tarball> [expected-version]');
  process.exit(2);
}
const unpacked = isAbsolute(unpackedArg) ? unpackedArg : resolve(process.cwd(), unpackedArg);
const manifestPath = join(unpacked, 'package.json');
if (!existsSync(manifestPath)) {
  console.error(`not found: ${manifestPath} - was the tarball extracted?`);
  process.exit(1);
}
const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
const packaged = new Set(listFiles(unpacked).map((path) => rel(path, unpacked)));

let failures = 0;
const fail = (message) => { failures += 1; console.error(`  FAIL  ${message}`); };
const ok = (message) => console.log(`  ok    ${message}`);
const has = (relative) => packaged.has(String(relative).replace(/^\.\//, ''));

console.log(`${basename(tarballName)} - ${manifest.name}@${manifest.version}`);

console.log('\n1. tarball');
if (packaged.size === 0) fail('tarball contains no files');
else ok(`tarball contains ${packaged.size} files`);

console.log('\n2. dsh bundle contract');
const bundlePatch = manifest?.dsh?.bundle?.patch;
if (bundlePatch) {
  ok(`dsh.bundle.patch = ${bundlePatch} - this is what dsh plugin add reconciles on`);
  if (has(bundlePatch)) ok('the patch file itself ships in the tarball');
  else fail(`dsh.bundle.patch points at ${bundlePatch} which is NOT in the tarball`);
} else fail('dsh.bundle.patch is missing - dsh plugin add would install this as a plain dependency');

const clientPath = manifest?.exports?.['./client'];
if (clientPath) {
  if (has(clientPath)) ok(`exports['./client'] = ${clientPath} ships in the tarball`);
  else fail(`exports['./client'] points at ${clientPath} which is NOT in the tarball`);
  const clientText = readFileSync(join(unpacked, clientPath), 'utf8');
  if (!clientText.includes('__ModuleLoader__')) {
    fail(`${clientPath} has no __ModuleLoader__ wrapper - is build:client run and the output committed?`);
  } else ok('client bundle is wrapped for the browser module loader');
} else fail("exports['./client'] is missing");

console.log('\n3. every files entry must resolve to a packed file');
for (const pattern of manifest?.files ?? []) {
  if (pattern.endsWith('/')) {
    const dir = pattern.replace(/\/$/, '');
    if (existsSync(join(unpacked, dir))) ok(`directory ${pattern} packed`);
    else fail(`files lists directory ${pattern} but nothing was packed from it`);
    continue;
  }
  if (has(pattern)) ok(`file ${pattern} packed`);
  else fail(`files lists ${pattern} but the tarball does not contain it`);
}

console.log('\n4. bin entries must exist');
const bins = manifest?.bin && typeof manifest.bin === 'string'
  ? { [manifest.name]: manifest.bin }
  : manifest?.bin ?? null;
if (bins && Object.keys(bins).length > 0) {
  for (const [command, target] of Object.entries(bins)) {
    if (existsSync(join(unpacked, target))) ok(`bin ${command} -> ${target}`);
    else fail(`bin ${command} -> ${target} does not exist in the tarball (installers get a broken shim)`);
  }
} else {
  ok('no bin field - correct, DSH plugins are loaded by the cordis loader, not a CLI');
}

console.log('\n5. license');
if (manifest?.license) ok(`license declared: ${manifest.license}`);
else fail('no license field');
if (has('LICENSE') || has('LICENSE.md')) ok('LICENSE text ships in the tarball');
else if (manifest?.license) fail('license is declared but no LICENSE file ships - the claim is unverifiable');

console.log('\n6. publish configuration');
if (manifest?.name?.startsWith('@')) {
  if (manifest?.publishConfig?.access === 'public') ok('publishConfig.access = public (a scoped package defaults to restricted)');
  else fail('scoped package without publishConfig.access=public - the first publish becomes a private paid package');
} else if (manifest?.publishConfig) ok(`publishConfig = ${JSON.stringify(manifest.publishConfig)}`);
if (manifest?.repository?.url) ok(`repository = ${manifest.repository.url}`);
else fail('no repository field');

console.log('\n7. version');
if (expected) {
  const normalized = expected.replace(/^v/, '');
  if (normalized === manifest.version) ok(`version ${manifest.version} matches the release tag ${expected}`);
  else fail(`version ${manifest.version} does not match the release tag ${expected} - refusing to publish the wrong version`);
} else ok(`version ${manifest.version}`);

if (failures > 0) {
  console.error(`\n${failures} audit failure(s)`);
  process.exit(1);
}
console.log('\nall checks passed');

function rel(path, root) {
  return path.slice(root.length + 1);
}

function listFiles(dir) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listFiles(full));
    else out.push(full);
  }
  return out;
}