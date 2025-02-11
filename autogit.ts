import cron from 'node-cron';

// Function to be executed
const task = () => {
    const now = new Date();
    console.log(`Task executed at: ${now.toLocaleString()}`);
};

// Schedule the task to run every minute
const cronExpression = '* * * * *';  // This pattern means every minute
const scheduledTask = cron.schedule(cronExpression, task);

// Start the scheduled task
scheduledTask.start();

console.log('Cron job has been scheduled. It will run every minute.');

// Optional: Add error handling or exit gracefully
process.on('SIGINT', () => {
    console.log('Stopping the cron job.');
    scheduledTask.stop();
    process.exit();
});
tsc cronJob.ts
node cronJob.js
