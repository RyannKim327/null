const cron = require('node-cron');

// Define the task function that will be run on schedule
const task = () => {
  console.log('This task runs every minute');
};

// Schedule the task to run every minute
cron.schedule('* * * * *', task);
