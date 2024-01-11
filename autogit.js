const cron = require('node-cron');

// Define the cron schedule
const schedule = '0 * * * *'; // Runs every hour at the 0th minute

// Define the cron job function
const cronJob = cron.schedule(schedule, () => {
  // Code to be executed on schedule
  console.log('Running cron job...');
  // Add your desired code here
}, {
  scheduled: true, // Start the cron job immediately
  timezone: 'America/New_York' // Set the timezone as per your requirements
});

// Start the cron job
cronJob.start();
