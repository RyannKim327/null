const cron = require('node-cron');

// Define the task to be executed
const task = () => {
  console.log('This task runs every minute');
};

// Schedule the task using cron
cron.schedule('* * * * *', task);

// Additional tasks can be scheduled by defining more functions and using cron.schedule()
const task2 = () => {
  console.log('This task runs every hour');
};

cron.schedule('0 * * * *', task2);
