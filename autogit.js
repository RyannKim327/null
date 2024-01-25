const cron = require('cron');

// Schedule a task to run every minute
const task = new cron.CronJob('*/1 * * * *', function() {
  console.log('Task executed at: ', new Date());
}, null, true, 'America/Los_Angeles');

// Start the task
task.start();

// Stop the task after 5 minutes
setTimeout(function() {
  task.stop();
}, 5 * 60 * 1000);
