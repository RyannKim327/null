// cronJob.ts
import cron from 'node-cron';

// Schedule a task to run every minute
const task = cron.schedule('* * * * *', () => {
    console.log('Task is running every minute:', new Date().toLocaleTimeString());
});

// Start the task
task.start();

// Stop the task after 5 minutes (for demo purposes)
setTimeout(() => {
    task.stop();
    console.log('Task has been stopped.');
}, 5 * 60 * 1000);
npx ts-node cronJob.ts
