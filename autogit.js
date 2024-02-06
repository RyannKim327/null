const cron = require('cron');

// Function to be executed by cron job
function myFunction() {
  console.log('Hello, world!');
}

// Create a cron job that runs every 5 seconds
const job = new cron.CronJob('*/5 * * * * *', myFunction);

// Start the cron job
job.start();
