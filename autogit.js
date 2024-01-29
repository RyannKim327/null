const cron = require('node-cron');

// Define your task function
function task() {
  console.log('Running task...');
  // Your task logic goes here
}

// Schedule the task to run every minute using cron syntax
cron.schedule('* * * * *', task);

// Output a confirmation message
console.log('Task scheduled. Waiting for it to run...');
npm install node-cron
