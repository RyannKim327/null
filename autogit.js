const cron = require('node-cron');

// Define the task to be executed
const task = () => {
  console.log('Task executed!');
  // Add your desired code here
};

// Schedule the task to run every minute
cron.schedule('* * * * *', task);

// Alternatively, you can schedule the task to run at a specific time
// cron.schedule('0 8 * * *', task); // Runs the task at 8:00 AM every day

console.log('Cron job scheduled!');
