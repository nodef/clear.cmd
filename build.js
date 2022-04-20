const cp = require('child_process');

const CLEAR_URL = 'https://github.com/nodef/clear.cmd/releases/download/1.0.0/clear.exe';


function fetchSuper(url) {
  cp.execSync(`wget -nv ${url}`);
  cp.execSync(`mv clear.exe main.exe`);
  cp.execSync(`chmod +x main.exe`);
}


function main() {
  fetchSuper(CLEAR_URL);
}
main();
