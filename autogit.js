const CronJob = require('cron').CronJob;

// Function to be executed
function myFunction() {
  console.log('Executing myFunction...');
  // Your code here
}

// Define the cron schedule
const cronSchedule = '* * * * *'; // Runs every minute

// Create a new cron job
const job = new CronJob(cronSchedule, myFunction);

// Start the cron job
job.start();

// Stop the cron job after 5 minutes
setTimeout(() => {
  job.stop();
  console.log('Cron job stopped.');
}, 5 * 60 * 1000);
