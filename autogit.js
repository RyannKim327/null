const cron = require('node-cron');

// Define the task to be executed
const task = () => {
  console.log('Running scheduled task!');
  // Your code logic here
};

// Schedule the task to run every minute
cron.schedule('* * * * *', task);
