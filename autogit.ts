npm install node-cron
npm install --save-dev @types/node-cron
import cron from 'node-cron';

// Schedule a task to run every minute
const task = cron.schedule('* * * * *', () => {
  console.log('Running a task every minute:', new Date().toLocaleTimeString());
});

// Start the cron job
task.start();
