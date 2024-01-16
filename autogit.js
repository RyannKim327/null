const cron = require('node-cron');

// Define the task to be executed
const task = () => {
  console.log('Running scheduled task...');
};

// Schedule the task to run every minute
const cronJob = cron.schedule('* * * * *', task);

// Start the cron job
cronJob.start();

// Stop the cron job after 5 minutes
setTimeout(() => {
  console.log('Stopping the scheduled task...');
  cronJob.stop();
}, 5 * 60 * 1000);
