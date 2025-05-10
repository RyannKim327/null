npm install node-cron
npm install --save-dev typescript @types/node
import cron from 'node-cron';

// Function to be executed by the cron job
const scheduledTask = () => {
    const now = new Date();
    console.log(`Task executed at: ${now.toLocaleTimeString()}`);
};

// Schedule the task to run every minute
const task = cron.schedule('* * * * *', () => {
    scheduledTask();
});

// Start the cron job
task.start();

// Test logging to confirm script is running
console.log('Cron job has been started. It will log the current time every minute.');

// Handle graceful shutdown
process.on('SIGINT', () => {
    console.log('Stopping the cron job...');
    task.stop();
    process.exit(0);
});
npx tsc cronJob.ts
node cronJob.js
