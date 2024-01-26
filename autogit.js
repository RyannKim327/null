const CronJob = require('cron').CronJob;

// Define the job to be executed at a specific schedule
const job = new CronJob('*/5 * * * * *', function() {
  console.log('This job runs every 5 seconds');
}, null, true, 'America/New_York');

// Start the job
job.start();
