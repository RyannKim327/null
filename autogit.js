const cron = require('node-cron');

// Function to be executed
const task = () => {
  console.log('Task executed!');
};

// Schedule the task to run every minute
cron.schedule('* * * * *', task);

// Output a message when the script starts
console.log('Script started.');

// Keep the script running
setInterval(() => {
  console.log('Script running...');
}, 1000);
