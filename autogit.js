const cron = require('node-cron');

// Define a function to be executed
const task = () => {
  console.log('Running task at', new Date());
};

// Schedule the task to run every minute
cron.schedule('* * * * *', task);
