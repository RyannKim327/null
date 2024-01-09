const cron = require('node-cron');

function task() {
  console.log('This task runs every minute!');
  // Add your code here to perform the task you want to schedule
}

// Schedule the task to run every minute
cron.schedule('* * * * *', task);
