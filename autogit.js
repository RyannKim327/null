const cron = require('node-cron');

// Define the cron schedule
const cronSchedule = '*/5 * * * *'; // Executes every 5 minutes

// Define the cron task to be executed
const cronTask = () => {
  // Your task logic goes here
  console.log('Cron task executed!');
};

// Schedule the cron task
cron.schedule(cronSchedule, cronTask);

// Keep the script running
setInterval(() => {
  console.log('Script is still running...');
}, 60000);
