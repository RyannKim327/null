const cron = require('node-cron');

// Define a task to execute
const task = () => {
  console.log('This task ran at:', new Date());
};

// Schedule the task to run every minute
cron.schedule('* * * * *', task);

console.log('Cron job has been scheduled.');
