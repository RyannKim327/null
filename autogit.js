const CronJob = require('cron').CronJob;

// Define the cron expression to run the task
const cronExpression = '0 */5 * * * *'; // Runs every 5 minutes

// Define the task to be executed
const task = () => {
  console.log('Running the task...');
  // Your task logic goes here
};

// Create a new cron job instance
const cronJob = new CronJob(cronExpression, task);

// Start the cron job
cronJob.start();

console.log(`Cron job scheduled to run every 5 minutes.`);
