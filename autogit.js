const CronJob = require('cron').CronJob;

// Define the task to be performed
function performTask() {
  console.log('Performing the scheduled task...');
  // Add your task code here
}

// Create a cron job that executes the task every 5 minutes
const job = new CronJob('*/5 * * * *', performTask);

// Start the cron job
job.start();

console.log('Cron job started. Task will run every 5 minutes.');
