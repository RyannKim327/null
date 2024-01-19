const CronJob = require('cron').CronJob;

// Define the cron schedule pattern (runs every minute)
const schedule = '* * * * *';

// Create a new cron job
const job = new CronJob(schedule, function() {
  // This code will be executed when the cron job triggers
  console.log('Cron job triggered!');
}, null, true);

// Start the cron job
job.start();

// Logging a message to indicate the job has started
console.log('Cron job started!');
