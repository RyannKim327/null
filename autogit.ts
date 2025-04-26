import cron from 'node-cron';

// Schedule a job to run every minute
const task = cron.schedule('* * * * *', () => {
  console.log('This runs every minute:', new Date().toISOString());
});

// Start the scheduled task
task.start();
npm install node-cron @types/node-cron
