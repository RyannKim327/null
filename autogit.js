const cron = require('node-cron');

cron.schedule('30 10 * * *', () => {
  console.log('Running a task at 10:30 AM every day!');
});
npm install node-cron
