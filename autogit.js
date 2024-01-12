const cron = require('cron');

// Create a new cron job that runs every minute
const job = new cron.CronJob('* * * * *', () => {
  console.log('This function will be executed every minute');
}, null, true, 'UTC');

// Start the cron job
job.start();
