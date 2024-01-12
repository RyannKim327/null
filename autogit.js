const cron = require('node-cron');

// Schedule a cron job to run every minute
cron.schedule('* * * * *', () => {
  console.log('This cron job runs every minute.');
});

// Schedule a cron job to run every day at 12:00 PM
cron.schedule('0 12 * * *', () => {
  console.log('This cron job runs every day at 12:00 PM.');
});

// Schedule a cron job to run on specific weekdays at 9:00 AM
cron.schedule('0 9 * * 1-5', () => {
  console.log('This cron job runs on weekdays (Monday to Friday) at 9:00 AM.');
});

// Schedule a cron job to run every 30 seconds
cron.schedule('*/30 * * * * *', () => {
  console.log('This cron job runs every 30 seconds.');
});
npm install node-cron
