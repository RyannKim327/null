const cron = require('cron');

// Create a new cron job running every minute
const job = new cron.CronJob('* * * * *', () => {
  console.log('Running task...');
  // Your task code goes here
}, null, true, 'UTC');

// Start the cron job
job.start();
