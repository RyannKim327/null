const cron = require("cron");

// Create a cron job that runs every minute
const job = new cron.CronJob("* * * * *", function() {
  console.log("This is a scheduled task running every minute");
});

// Start the cron job
job.start();

// Output a message indicating the cron job has started
console.log("Cron job started");

// Wait for 10 minutes and then stop the cron job
setTimeout(function() {
  job.stop();
  console.log("Cron job stopped");
}, 10 * 60 * 1000);
