const cron = require('node-cron');

// Define the task to be executed
const task = () => {
  console.log('Task executed!');
  // Insert your desired task code here
};

// Schedule the task to run every minute
cron.schedule('* * * * *', task);

// Keep the script running indefinitely
setInterval(() => {}, 1000);
