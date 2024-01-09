const cron = require('cron');

// Create a cron job that runs every minute
const job = new cron.CronJob('* * * * *', () => {
  // The code to be executed
  console.log('This job runs every minute');
});

// Start the cron job
job.start();
