import cron from 'node-cron';

// Schedule a task to run every minute
const task = cron.schedule('* * * * *', () => {
  console.log('Running task at', new Date().toLocaleTimeString());
});

// Start the scheduled task
task.start();
