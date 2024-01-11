const cron = require('cron');

// Create a new cron job
const job = new cron.CronJob({
  cronTime: '0 * * * *', // Run the job every hour at 0 minutes
  onTick: function() {
    // Code to be executed at every tick
    console.log('Cron job running...');
    // Add your task here
  },
  timeZone: 'Etc/UTC', // Set the timezone
});

// Start the cron job
job.start();

console.log('Cron job scheduled.');
