import cron from 'node-cron';

// Schedule a task to run every minute
const task = cron.schedule('* * * * *', () => {
  console.log(`Cron job executed at ${new Date().toISOString()}`);
});

// Start the cron job
task.start();

// Optional: Stop the task after 5 minutes
setTimeout(() => {
  task.stop();
  console.log('Cron job stopped');
}, 5 * 60 * 1000);
npm install node-cron
