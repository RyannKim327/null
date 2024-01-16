const cron = require('node-cron');

// Define the cron expression
const cronExpression = '*/5 * * * *'; // Runs every 5 minutes

// Schedule the task
const task = cron.schedule(cronExpression, () => {
  // Code to be executed at each scheduled interval
  console.log('Running task...');
}, {
  scheduled: true, // Start the task immediately
  timezone: 'America/New_York' // Set timezone (optional)
});

// Stop the task after 30 minutes
setTimeout(() => {
  task.stop();
  console.log('Task stopped.');
}, (30 * 60 * 1000));
