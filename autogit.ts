import cron from 'node-cron';

// Schedule a task that runs every minute
const task = cron.schedule('* * * * *', () => {
  const now = new Date();
  console.log(`Cron task executed at: ${now.toISOString()}`);
});

// Start the cron job
task.start();

// Optional: Stop the task after 5 minutes (for demonstration)
setTimeout(() => {
  task.stop();
  console.log('Cron task stopped.');
}, 5 * 60 * 1000);
