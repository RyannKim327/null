const cron = require('cron');

// Initialize a CronJob object
const job = new cron.CronJob('*/5 * * * * *', function() {
  // This function will run every 5 seconds
  console.log('Cron job is running!');
});

// Start the CronJob
job.start();

// Stop the CronJob after 30 seconds
setTimeout(function() {
  job.stop();
  console.log('Cron job has been stopped.');
}, 30000);
