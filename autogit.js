const cron = require('cron');

// Define the cron schedule
const cronExpression = '0 * * * *'; // Runs every hour at minute 0

// Create a cron job
const job = new cron.CronJob(cronExpression, () => {
  // Code to be executed on each cron trigger
  console.log('Cron job triggered!');
}, null, true, 'UTC');

// Start the cron job
job.start();
