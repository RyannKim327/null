const cron = require('cron');

// Create a cron job
const job = new cron.CronJob('* * * * *', () => {
  // This function will be executed every minute
  console.log('Cron job executed!');
});

// Start the cron job
job.start();

// Stop the cron job after 10 seconds
setTimeout(() => {
  job.stop();
  console.log('Cron job stopped!');
}, 10000);
