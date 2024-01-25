const cron = require('node-cron');

// Define the task to be executed
const task = () => {
  console.log('Task executed!');
};

// Schedule the task to run every minute
cron.schedule('* * * * *', task);

// Alternatively, you can schedule it for specific times/days using cron syntax
// For example, to schedule the task to run every Monday at 9:30 AM
// cron.schedule('30 9 * * 1', task);

// Keep the script running to continuously execute the scheduled tasks
setInterval(() => {}, 1000);
npm install node-cron
