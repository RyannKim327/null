const cron = require('cron');

// A function to be executed as a task
function myTask() {
  console.log('Task running at: ', new Date());
  // Your task code here...
}

// Schedule the task to run every 5 minutes
const cronJob = new cron.CronJob('*/5 * * * *', myTask);

// Start the cron job
cronJob.start();

// Stop the cron job after 1 hour (for demonstration purpose)
setTimeout(() => {
  cronJob.stop();
  console.log('Cron job stopped.');
}, 60 * 60 * 1000); // 1 hour
