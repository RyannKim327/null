npm install node-cron
import cron from 'node-cron';

// Schedule a task to run every minute
const task = cron.schedule('* * * * *', () => {
    const currentDateTime = new Date();
    console.log(`Task executed at: ${currentDateTime.toLocaleString()}`);
});

// Start the cron job
task.start();

// This can be useful to stop the job after some time, for demonstration
setTimeout(() => {
    task.stop();
    console.log('Cron job stopped.');
}, 60000); // Stops after 60 seconds
tsc cronJob.ts
node cronJob.js
* * * * * (minute, hour, day of month, month, day of week)
