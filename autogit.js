const cron = require('node-cron');

// Define your cron job function
const task = () => {
  console.log('Executing cron job...');
  // Your code logic goes here
};

// Schedule the cron job to run every minute
cron.schedule('* * * * *', task);
