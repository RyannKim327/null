const cron = require('node-cron');

// Define a function to be executed periodically
const task = () => {
  console.log('Running cron job...');
  // Your code here
};

// Schedule the task to run every minute
cron.schedule('* * * * *', task);

// You can also use cron expressions for more specific schedules
// Examples:
// - Run every hour, at the 30th minute: '30 * * * *'
// - Run every day at 9 AM: '0 9 * * *'
// - Run every Monday at 3 PM: '0 15 * * 1'

// Keep the script running indefinitely
console.log('Cron job scheduled.');
