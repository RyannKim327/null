npm install node-cron
import cron from 'node-cron';

// Schedule a task to run every minute
const task = cron.schedule('* * * * *', () => {
  console.log('This message is logged every minute:', new Date().toISOString());
});

// Start the task
task.start();

// Optional: To stop the task after a set amount of time
setTimeout(() => {
  task.stop();
  console.log('Task stopped.');
}, 60000); // Stops the task after 1 minute
tsc cronExample.ts
node cronExample.js
