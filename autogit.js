const cron = require('node-cron');

// Runs every minute
cron.schedule('* * * * *', () => {
  console.log('Running a task every minute');
});

// Runs every hour at 12:00 PM
cron.schedule('0 12 * * *', () => {
  console.log('Running a task every day at 12:00 PM');
});

// Runs every Monday at 9:30 AM
cron.schedule('30 9 * * 1', () => {
  console.log('Running a task every Monday at 9:30 AM');
});

// Runs every Friday at 5:00 PM
cron.schedule('0 17 * * 5', () => {
  console.log('Running a task every Friday at 5:00 PM');
});
