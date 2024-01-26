const cron = require('node-cron');

// Schedule a task to run every minute
cron.schedule('* * * * *', () => {
  console.log('Scheduled task running every minute');
});

// Schedule a task to run every day at 9:00 AM
cron.schedule('0 9 * * *', () => {
  console.log('Scheduled task running every day at 9:00 AM');
});

// Schedule a task to run on specific days of the week
cron.schedule('0 18 * * 1,4', () => {
  console.log('Scheduled task running every Monday and Thursday at 6:00 PM');
});
npm install node-cron
