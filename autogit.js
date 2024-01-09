const cron = require('node-cron');

// Function to execute at scheduled intervals
function doSomething() {
  console.log('Task executed');
  // Add your code here to perform the required task
}

// Cron schedule
const cronSchedule = '*/5 * * * *'; // Executes every 5 minutes

// Define the cron job
const cronJob = cron.schedule(cronSchedule, doSomething);

// Start the cron job
cronJob.start();

// Stop the cron job after 1 hour
setTimeout(() => {
  cronJob.stop();
  console.log('Cron job stopped');
}, 3600000); // 1 hour in milliseconds
