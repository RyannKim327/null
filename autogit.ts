import cron from 'node-cron';

// Schedule a task to run every minute
const task = cron.schedule('* * * * *', () => {
  const now = new Date();
  console.log(`Cron job executed at: ${now.toISOString()}`);
});

// Start the scheduled task
task.start();

// Optional: Stop the task after 5 minutes
setTimeout(() => {
  task.stop();
  console.log('Cron job stopped after 5 minutes.');
}, 5 * 60 * 1000);
npm install node-cron
