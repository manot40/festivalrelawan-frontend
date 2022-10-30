const { existsSync } = require('fs');

if (!existsSync('.next')) {
  const { execSync } = require('child_process');
  console.log('.next folder not found! Building app...');
  execSync('npm run build');
}

const { exec } = require('child_process');

const nextServer = exec('npm run start');

nextServer.stdout.on('data', (data) => {
  console.log(data);
});

nextServer.stderr.on('data', (data) => {
  console.error(data);
});

nextServer.on('exit', (code) => {
  console.log(`Next server exited with code ${code}`);
});
