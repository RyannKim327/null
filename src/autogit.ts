mkdir cron-example
cd cron-example
npm init -y
npm install typescript @types/node node-cron
npm install -D ts-node
import cron from 'node-cron';

// Schedule a task to run every minute
const task = cron.schedule('* * * * *', () => {
    const currentTime = new Date().toLocaleString();
    console.log(`Task is running at: ${currentTime}`);
});

// Start the task
task.start();

// Optional: Stop the task after 5 minutes
setTimeout(() => {
    task.stop();
    console.log('Task has been stopped.');
}, 5 * 60 * 1000); // 5 minutes in milliseconds
npx ts-node cronJob.ts
