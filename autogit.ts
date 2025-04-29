npm install node-cron
import cron from 'node-cron';

// Schedule a task to run every minute
const task = cron.schedule('* * * * *', () => {
  const now = new Date();
  console.log(`Current time: ${now.toISOString()}`);
});

// Start the scheduled task
task.start();
