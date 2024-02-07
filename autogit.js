const cron = require('node-cron');

// Define the cron job schedule (runs every minute)
const task = cron.schedule('* * * * *', () => {
  console.log('Running cron job...');
  // Your code logic here...

  // Stop the cron job after running for 5 minutes
  if (task.getTotalRunTime() >= 5 * 60 * 1000) {
    console.log('Stopping cron job...');
    task.stop();
  }
});

// Start the cron job
task.start();
