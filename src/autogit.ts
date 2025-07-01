import cron from 'node-cron';

// Function to be executed by the cron job
const performTask = () => {
  const currentTime = new Date().toISOString();
  console.log(`Cron job executed at: ${currentTime}`);
};

// Schedule a cron job to run every minute
const scheduleCronJob = () => {
  // Cron syntax: "* * * * *" means "every minute"
  cron.schedule('* * * * *', () => {
    console.log('Running scheduled task...');
    performTask();
  });

  console.log('Cron job has been scheduled successfully.');
};

// Start the cron job scheduling
scheduleCronJob();

// Optional: Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\nCron job stopped.');
  process.exit();
});
Cron job has been scheduled successfully.
Running scheduled task...
Cron job executed at: 2023-03-15T12:00:00.000Z
Running scheduled task...
Cron job executed at: 2023-03-15T12:01:00.000Z
...
