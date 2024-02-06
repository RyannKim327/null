const cron = require('cron');

// Function to be executed by the cron job
const task = () => {
  console.log('This task is executed by the cron job!');
};

// Create a cron job to run every minute
const cronJob = new cron.CronJob('*/1 * * * *', task);

// Start the cron job
cronJob.start();

// Keep the script running
setInterval(() => {}, 1000);
