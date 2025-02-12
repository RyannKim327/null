npm install node-cron
import cron from 'node-cron';

// Schedule a task to run every minute
const task = cron.schedule('* * * * *', () => {
    console.log('Hello, World! The time is: ' + new Date().toLocaleTimeString());
});

// Start the task
task.start();

console.log('Cron job started. It will run every minute.');
