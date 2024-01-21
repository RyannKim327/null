const cron = require('cron');

// Create a cron job
const job = new cron.CronJob('*/5 * * * * *', () => {
  // This function will be executed every 5 seconds

  // Perform your desired task here
  console.log('Task executed!');
});

// Start the cron job
job.start();

// Output a message to indicate that the cron job has started
console.log('Cron job started!');
