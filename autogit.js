const cron = require('cron');

// Define a CronJob that runs every minute
const job = new cron.CronJob('* * * * *', function() {
  console.log('This task runs every minute');
}, null, true, 'UTC');

// Start the CronJob
job.start();
