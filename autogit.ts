npm install node-cron
npm install typescript @types/node --save-dev
import cron from 'node-cron';

// Schedule a task to run every minute
const task = cron.schedule('* * * * *', () => {
    console.log('This message is logged every minute: ' + new Date().toLocaleTimeString());
});

// Start the task
task.start();

// Optional: Stop the task after some time (e.g., 5 minutes)
setTimeout(() => {
    task.stop();
    console.log('Task stopped.');
}, 5 * 60 * 1000); // Stop after 5 minutes
npx tsc cron-example.ts
node cron-example.js
