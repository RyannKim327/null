// cronJob.ts
import cron from 'node-cron';

// Schedule a task to run every minute
const task = cron.schedule('* * * * *', () => {
  const now = new Date();
  console.log(`Task is running at: ${now.toISOString()}`);
});

// Start the cron job
task.start();

// Optional: Stop the cron job after 5 minutes
setTimeout(() => {
  task.stop();
  console.log('Task has been stopped.');
}, 5 * 60 * 1000); // 5 minutes
Task is running at: 2023-07-04T10:00:00.000Z
Task has been stopped.
