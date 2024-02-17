const cron = require('node-cron');

// Define the task to be executed
const task = () => {
  console.log('Task executed at: ', new Date());
};

// Schedule the task to run every minute
cron.schedule('* * * * *', task);

console.log('Cron job scheduled!');
npm install node-cron
