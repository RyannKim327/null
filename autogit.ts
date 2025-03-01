npm install node-cron
import cron from 'node-cron';

// Schedule a task to run every minute
const task = cron.schedule('* * * * *', () => {
    console.log(`Task is running every minute: ${new Date().toISOString()}`);
});

// Start the task
task.start();

console.log('Cron job has been scheduled. It will run every minute.');

// Optional: If you want to stop the task after a certain time
setTimeout(() => {
    task.stop();
    console.log('Cron job has been stopped.');
}, 60000); // Stops the task after 60 seconds
npm install -g typescript
tsc cronScheduler.ts
node cronScheduler.js
Cron job has been scheduled. It will run every minute.
Task is running every minute: 2023-10-06T12:00:00.000Z
Task is running every minute: 2023-10-06T12:00:01.000Z
Task is running every minute: 2023-10-06T12:00:02.000Z
...
Cron job has been stopped.
