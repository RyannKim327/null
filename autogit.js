const cron = require('node-cron');

// Define the task to be executed
const task = () => {
  console.log('Running task...');
  // Your code goes here...
};

// Schedule the task to run every minute
cron.schedule('* * * * *', task);
