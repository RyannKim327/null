import cron from 'node-cron';

// Schedule a task to run every minute
const task = cron.schedule('* * * * *', () => {
  console.log('Running a task every minute:', new Date().toLocaleTimeString());
});

// Start the scheduled task
task.start();
npm install node-cron
ts-node your-script.ts
