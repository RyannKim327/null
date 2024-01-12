const cron = require('node-cron');

// Function to be executed by cron
function myTask() {
  console.log('This task will be executed by cron!');
}

// Cron schedule
cron.schedule('*/5 * * * *', myTask);
