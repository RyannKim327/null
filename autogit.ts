npm install node-cron
import cron from 'node-cron';

// Schedule a task to run every minute
const task = cron.schedule('* * * * *', () => {
    console.log('Task is running every minute at:', new Date().toLocaleString());
});

// Start the cron job
task.start();

// Optionally, you can stop the task after a certain time.
// For example, stop after 5 minutes.
setTimeout(() => {
    task.stop();
    console.log('Task has been stopped.');
}, 5 * 60 * 1000); // 5 minutes in milliseconds
npm install -g typescript
tsc cron-example.ts
node cron-example.js
