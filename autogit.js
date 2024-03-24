const cron = require('node-cron');

// Define a function to be executed on schedule
function myScheduledFunction() {
  console.log('Running scheduled function at:', new Date());
}

// Schedule the function to run every minute
cron.schedule('* * * * *', myScheduledFunction);

console.log('Cron job scheduled. Waiting for executions...');
