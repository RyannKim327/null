const cron = require('node-cron');

// Schedule a task to run every minute
cron.schedule('* * * * *', () => {
  console.log('Running a task every minute');
  // Add your desired code here
});

// Schedule a task to run at 9:30 AM every day
cron.schedule('30 9 * * *', () => {
  console.log('Running a task at 9:30 AM every day');
  // Add your desired code here
});

// Schedule a task to run on Sundays at 5 PM
cron.schedule('0 17 * * 0', () => {
  console.log('Running a task on Sundays at 5 PM');
  // Add your desired code here
});
