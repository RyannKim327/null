const cron = require('cron');

// Create a cron job that runs every minute
const job = new cron.CronJob('* * * * *', () => {
  console.log('Running task...');
  // Your code to be executed at each interval goes here
});

// Start the cron job
job.start();

// You can also stop the cron job when needed using:
// job.stop();
