const { spawn } = require('child_process');
const chmod = spawn('chmod', ['+x', './start.sh']);

chmod.on('exit', (code) => {
  if (code === 0) {
    const startScript = spawn('./start.sh');

    startScript.stdout.on('data', (data) => {
      console.log(`MODSBOTS：${data}`);
    });

    startScript.stderr.on('data', (data) => {
      console.error(`${data}`);
    });

    startScript.on('close', (code) => {
      console.log(`MODSBOTS，BUN ${code}`);
    });
  } else {
    console.error(`chmod ERROR ${code}`);
  }
});
