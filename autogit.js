const cron = require('cron');

// Create a new cron job with the desired schedule
const job = new cron.CronJob('0 0 0 * * *', () => {
  // Code to be executed when the cron job runs
  console.log('This job runs at midnight every day!');
});

// Start the cron job
job.start();
