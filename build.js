const fs = require('fs');
const cp = require('child_process');

const CLEAR_URL = 'https://github.com/nodef/clear.cmd/releases/download/1.0.0/clear.exe';


// Read a text file.
function readTextFile(pth) {
  const txt = fs.readFileSync(pth, 'utf8');
  return txt.replace(/\r\n|\r/g, '\n');
}


// Run a command line.
function runCommand(cmd) {
  cp.execSync(cmd, {stdio: 'inherit'});
}


// Publish package to NPM.
function publishPackages() {
  // Download executable file (needs wget)
  cp.execSync(`wget -nv ${CLEAR_URL} -O clear.exe`);
  cp.execSync(`mv clear.exe main.exe`);
  cp.execSync(`chmod +x main.exe`);
  // Publish to NPM
  runCommand(`npm publish --access public`);
}



// Finally.
function main(a) {
  if (a[2]==='publish-packages') publishPackages();
}
main(process.argv);
