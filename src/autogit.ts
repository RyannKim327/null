import cron from 'node-cron';

// Schedule a task to run every minute
const task = cron.schedule('* * * * *', () => {
  const now = new Date();
  console.log(`Running a task at ${now.toISOString()}`);
});

// Start the scheduled task
task.start();
