import cron from 'node-cron';

// Schedule a task to run every minute
const task = cron.schedule('* * * * *', () => {
  const now = new Date();
  console.log(`[${now.toISOString()}] Running the scheduled task...`);
});

// Start the scheduled task
task.start();

// Optional: Stop the task after 5 minutes
setTimeout(() => {
  task.stop();
  console.log('Task stopped.');
}, 5 * 60 * 1000);
