const CronJob = require('cron').CronJob;

// Define the cron schedule
const cronExpression = '0 * * * *'; // every hour

// Function to be executed by the cron job
function myCronFunction() {
  console.log('Cron job executed!');
  // Add your desired functionality here
}

// Create a new cron job
const cronJob = new CronJob(cronExpression, myCronFunction);

// Start the cron job
cronJob.start();

console.log('Cron job scheduled!');
