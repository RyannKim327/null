const cron = require('cron');

// Create a cron job that runs every minute
const job = new cron.CronJob('* * * * *', function() {
  console.log('Running task!');
});

// Start the cron job
job.start();
