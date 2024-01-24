const cron = require('cron');

// Define a cron job that runs every minute
const cronJob = new cron.CronJob('* * * * *', function() {
  // Function to be executed by the cron job
  console.log('This is a random task scheduled by cron!');
});

// Start the cron job
cronJob.start();

// Add more cron jobs if needed
// ...

// Stop the cron job after 5 minutes
setTimeout(function() {
  cronJob.stop();
  console.log('Cron job stopped.');
}, 5 * 60 * 1000);
