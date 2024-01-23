const cron = require('cron');

// Function to be executed
function task() {
  console.log('Executing task...');
  // Add your task logic here
}

// Schedule the task to run every minute
const cronJob = new cron.CronJob('* * * * *', task);

// Start the cron job
cronJob.start();

// Stop the cron job after 5 minutes
setTimeout(() => cronJob.stop(), 5 * 60 * 1000);
