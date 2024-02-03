const cron = require('node-cron');

// Define a cron job that runs every minute
const task = cron.schedule('* * * * *', () => {
  console.log('Cron job running...');
}, {
  scheduled: false, // Don't start the cron job immediately
});

// Start the cron job
task.start();

// Stop the cron job after 5 minutes
setTimeout(() => {
  task.stop();
}, 5 * 60 * 1000);
