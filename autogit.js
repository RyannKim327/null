const CronJob = require('cron').CronJob;

// Function to be executed
function greetUser() {
  console.log('Hello, world!');
}

// Cron job scheduling
const cronJob = new CronJob('0 0 * * *', greetUser); // Runs every day at midnight

// Start the cron job
cronJob.start();
