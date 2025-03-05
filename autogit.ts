npm install node-cron
import cron from 'node-cron';

// Schedule a task to run every minute
const task = cron.schedule('* * * * *', () => {
    const currentTime = new Date().toLocaleString();
    console.log(`Task running at: ${currentTime}`);
});

// Start the scheduled task
task.start();

// Log a message indicating that the cron job has started
console.log('Cron job has started. It will log the current time every minute.');

// Optional: Stop the task after 10 minutes for demonstration purposes
setTimeout(() => {
    task.stop();
    console.log('Cron job has stopped.');
}, 10 * 60 * 1000); // Stops after 10 minutes
tsc your-file.ts
node your-file.js
