// Import the cron package
const cron = require('node-cron');

// Define a task function to be executed by the cron job
const task = () => {
  console.log('Cron job is running!');
};

// Define the cron job using the cron syntax
const cronJob = cron.schedule('* * * * *', task); // Execute every minute

// Start the cron job
cronJob.start();

// Stop the cron job after 5 minutes
setTimeout(() => {
  cronJob.stop();
  console.log('Cron job stopped!');
}, 5 * 60 * 1000);
