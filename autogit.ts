mkdir typescript-cron-demo
cd typescript-cron-demo
npm init -y
npm install node-cron typescript @types/node --save
npx tsc --init
import cron from 'node-cron';

// Schedule a task to run every minute
const task = cron.schedule('* * * * *', () => {
    console.log('Cron job executed at: ' + new Date().toLocaleString());
});

// Start the cron job
task.start();
console.log('Cron job is scheduled. It will run every minute.');

// Optional: To stop the task after some time
setTimeout(() => {
    task.stop();
    console.log('Cron job stopped.');
}, 5 * 60 * 1000); // Stops after 5 minutes
npx tsc cronJob.ts
node cronJob.js
