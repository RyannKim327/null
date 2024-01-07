const cron = require('node-cron');

// Define a cron schedule
const cronSchedule = '*/5 * * * *'; // Runs every 5 minutes

// Define a cron task
const task = cron.schedule(cronSchedule, () => {
  console.log('Running task...');
  // Do something here
});

// Start the cron task
task.start();

// Optionally, you can also stop the cron task after a certain time
setTimeout(() => {
  task.stop();
}, 60000); // Stops the task after 1 minute
