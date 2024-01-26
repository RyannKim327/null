const CronJob = require('cron').CronJob;

// Function to be executed by the cron job
function myTask() {
  console.log('Running scheduled task...');
  // Add your task logic here
}

// Create a cron job that runs every minute
const job = new CronJob('* * * * *', myTask);

// Start the cron job
job.start();

console.log('Cron job has been scheduled.');
