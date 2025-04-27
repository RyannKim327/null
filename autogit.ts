npm install node-cron @types/node-cron
import cron from 'node-cron';

// Schedule a task to run every minute
const task = cron.schedule('* * * * *', () => {
  const now = new Date();
  console.log(`Cron job executed at: ${now.toISOString()}`);
});

// Start the cron job
task.start();
