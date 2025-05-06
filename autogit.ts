import cron from 'node-cron';

// Schedule a task to run every minute
const task = cron.schedule('* * * * *', () => {
  console.log(`Task executed at ${new Date().toLocaleTimeString()}`);
});

// Start the scheduled task
task.start();

// Optional: stop the task after 5 minutes
setTimeout(() => {
  task.stop();
  console.log('Task stopped');
}, 5 * 60 * 1000);
npm install node-cron
