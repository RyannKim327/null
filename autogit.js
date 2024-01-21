const cron = require('cron');

// Define the task function
function myTask() {
  console.log('Running scheduled task...');
  // Add your task logic here
}

// Schedule the task to run every minute
const job = new cron.CronJob('* * * * *', myTask);

// Start the cron job
job.start();

// Stop the cron job after 5 minutes
setTimeout(() => {
  job.stop();
  console.log('Cron job stopped.');
}, 5 * 60 * 1000);
