const cron = require('cron');

// Function to be executed on scheduled time
function myTask() {
  console.log('Task executed!');
}

// Create a scheduled task using cron
const cronJob = new cron.CronJob('* * * * *', myTask); // Runs every minute

// Start the cron job
cronJob.start();

// Wait for 5 minutes and stop the cron job
setTimeout(() => {
  cronJob.stop();
  console.log('Cron job stopped!');
}, 5 * 60 * 1000);
