const cron = require('node-cron');

// Define the task to be executed
const task = () => {
  console.log('Task is running...');
  // Write your task logic here
};

// Schedule the task to run every 5 minutes (*/5 * * * *)
cron.schedule('*/5 * * * *', task);
