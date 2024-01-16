const CronJob = require('cron').CronJob;

// Function to be executed by the cron job
function myJob() {
  console.log('Cron job is running!');
  // Add your code here
}

// Schedule the cron job to run every minute
const cronExpression = '* * * * *'; // Runs every minute
const job = new CronJob(cronExpression, myJob);

// Start the cron job
job.start();
