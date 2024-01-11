const CronJob = require('cron').CronJob;

// Create a job that runs every minute
const job = new CronJob('* * * * *', function() {
  console.log('This job runs every minute!');
}, null, true, 'America/New_York'); // Change timezone as per your preference

// Start the job
job.start();
