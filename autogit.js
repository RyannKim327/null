const cron = require('cron');

// Define your cron job
const job = new cron.CronJob('0 0 12 * * *', () => {
  // This function will be executed every day at 12:00 PM

  // Write your logic here
  console.log('Running task...');
  // Do something meaningful

}, null, true, 'UTC');

// Start the cron job
job.start();

// Run indefinitely
setInterval(() => {}, 1000);
