const cron = require('cron');

// Create a new cron job that runs every minute
const job = new cron.CronJob('* * * * *', function() {
  console.log('This job runs every minute');
});

// Start the cron job
job.start();

// Stop the cron job after 5 minutes
setTimeout(function() {
  job.stop();
  console.log('Job stopped after 5 minutes');
}, 5 * 60 * 1000);
