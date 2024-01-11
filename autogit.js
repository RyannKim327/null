const cron = require('node-cron');

// Define the task to be run
const task = () => {
  console.log('This task runs every minute');
};

// Schedule the task using cron syntax
const job = cron.schedule('* * * * *', task);

// Start the task
job.start();
npm install node-cron
