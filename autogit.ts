import cron from 'node-cron';

// Schedule a task to run every minute
const task = cron.schedule('* * * * *', () => {
  console.log(`Task running at ${new Date().toLocaleTimeString()}`);
});

task.start();
