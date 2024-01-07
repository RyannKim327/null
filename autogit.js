const cron = require('node-cron');

// Schedule a cron job to run every minute
cron.schedule('* * * * *', () => {
  // Your code logic here
  console.log('This cron job runs every minute');
});

// Schedule a cron job to run every day at 12:00 PM
cron.schedule('0 12 * * *', () => {
  // Your code logic here
  console.log('This cron job runs every day at 12:00 PM');
});

// Schedule a cron job to run every Monday at 8:00 AM
cron.schedule('0 8 * * 1', () => {
  // Your code logic here
  console.log('This cron job runs every Monday at 8:00 AM');
});

// Schedule a cron job to run every first day of the month at 10:00 PM
cron.schedule('0 22 1 * *', () => {
  // Your code logic here
  console.log('This cron job runs every first day of the month at 10:00 PM');
});
