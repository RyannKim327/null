const cron = require('node-cron');

// Schedule a cron job to run every minute
cron.schedule('* * * * *', () => {
  console.log('Running a task every minute');
  
  // Code logic to be executed here
});
npm install node-cron
