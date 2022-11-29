const cp    = require('child_process');
const build = require('extra-build');

const owner     = 'nodef';
const CLEAR_URL = 'https://github.com/nodef/clear.cmd/releases/download/1.0.0/clear.exe';


// Publish a root package to NPM, GitHub.
function publishRootPackage(ds, ver, typ) {
  var _package = build.readDocument('package.json');
  var _readme  = build.readDocument('README.md');
  var m  = build.readMetadata('.');
  m.version  = ver;
  build.writeMetadata('.', m);
  build.publish('.');
  try { build.publishGithub('.', owner); }
  catch {}
  build.writeDocument(_package);
  build.writeDocument(_readme);
}


// Download executable file (needs wget).
function fetchRelease(url) {
  cp.execSync(`wget -nv ${url}`);
  cp.execSync(`mv clear.exe main.exe`);
  cp.execSync(`chmod +x main.exe`);
}


// Publish root packages to NPM, GitHub.
function publishRootPackages(ds, ver) {
  fetchRelease(CLEAR_URL);
  publishRootPackage(ds, ver, '');
}


// Pushish root, sub packages to NPM, GitHub.
function publishPackages(ds) {
  var m   = build.readMetadata('.');
  var ver = build.nextUnpublishedVersion(m.name, m.version);
  publishRootPackages(ds, ver);
}


// Finally.
function main(a) {
  if (a[2]==='publish-packages') publishPackages([]);
  else bundleScript([]);
}
main(process.argv);
