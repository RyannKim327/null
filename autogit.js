const cron = require('node-cron');

// Define a cron job that runs every minute
cron.schedule('* * * * *', () => {
  console.log('Running a task every minute');
});

// Define a cron job that runs at a specific time every day
cron.schedule('0 8 * * *', () => {
  console.log('Running a task at 8:00 AM every day');
});

// Define a cron job that runs on specific days of the week
cron.schedule('0 12 * * 1,4', () => {
  console.log('Running a task at 12:00 PM on Mondays and Thursdays');
});

// Define a cron job that runs on specific months and days of the week
cron.schedule('0 0 1 1,4 *', () => {
  console.log('Running a task at midnight on the 1st of January and April');
});
