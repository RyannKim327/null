const CronJob = require('cron').CronJob;

// Define your cron schedule
const cronExpression = '0 0 * * *'; // Run the job every day at midnight

// Create a function for the task you want to perform
function performTask() {
  console.log('Task executed at:', new Date());
  // Your task code here...
}

// Schedule the job
const job = new CronJob(cronExpression, performTask);

// Start the job
job.start();
