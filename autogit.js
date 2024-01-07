const cron = require('node-cron');

// Define your cron job function
const myTask = () => {
  console.log('This is a scheduled task that runs every minute');
};

// Schedule a cron job to run every minute
cron.schedule('* * * * *', myTask);

// You can also schedule cron jobs using more complex schedules
// For example, a job that runs every day at 8:30 AM
cron.schedule('30 8 * * *', () => {
  console.log('This is a job that runs every day at 8:30 AM');
});

// A job that runs every Monday at 9:00 PM
cron.schedule('0 21 * * 1', () => {
  console.log('This is a job that runs every Monday at 9:00 PM');
});
