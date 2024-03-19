const { exec } = require('child_process');

// Function to start frontend
function startFrontend() {
  return new Promise((resolve, reject) => {
    exec('npm start', { cwd: 'C:\\Users\\vivek\\Downloads\\studynotion-edtech-project-main\\studynotion-edtech-project-main\\src' }, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        resolve(stdout);
      }
    });
  });
}

// Function to start backend
function startBackend() {
  return new Promise((resolve, reject) => {
    exec('npm start', { cwd: 'C:\\Users\\vivek\\Downloads\\studynotion-edtech-project-main\\studynotion-edtech-project-main\\server' }, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        resolve(stdout);
      }
    });
  });
}

// Start frontend and backend concurrently
Promise.all([startFrontend(), startBackend()])
  .then(() => {
    console.log('Both frontend and backend started successfully.');
  })
  .catch((error) => {
    console.error('Error starting either frontend or backend:', error);
  });
