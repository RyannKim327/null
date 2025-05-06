import cron from 'node-cron';

// Schedule a task to run every minute
const task = cron.schedule('* * * * *', () => {
  console.log('Running a task every minute:', new Date().toLocaleTimeString());
});

// Start the cron job
task.start();

// Optional: stop the job after 5 minutes (example)
setTimeout(() => {
  task.stop();
  console.log('Task stopped after 5 minutes');
}, 5 * 60 * 1000);
