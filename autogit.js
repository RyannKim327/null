const cron = require('node-cron');

cron.schedule('* * * * *', () => {
  console.log('Running a task every minute.');
});
npm install node-cron
node cron-job.js
