import cron from 'node-cron';

// Schedule a task to run every 5 seconds
const task = cron.schedule('*/5 * * * * *', () => {
  console.log('Current time:', new Date().toLocaleTimeString());
});

// Start the scheduled task
task.start();

// Optional: stop the task after 30 seconds for demo purposes
setTimeout(() => {
  task.stop();
  console.log('Task stopped.');
}, 30000);
