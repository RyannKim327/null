const cron = require('cron');

// Create a cron job that runs every 30 seconds
const job = new cron.CronJob('*/30 * * * * *', () => {
  // Task to be executed
  console.log('Cron job running...');
});

// Start the cron job
job.start();

// Let the cron job run for 2 minutes
setTimeout(() => {
  // Stop the cron job after 2 minutes
  job.stop();
}, 120000);
