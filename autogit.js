npm install cron
const cron = require('cron');

// Define a cron job that runs every minute
const job = new cron.CronJob('* * * * *', function() {
  console.log('Running a job every minute!');
});

// Start the cron job
job.start();

console.log('Cron job scheduled to run every minute.');
node cronExample.js
