mkdir my-cron-app
cd my-cron-app
npm init -y
npm install node-cron typescript @types/node ts-node
import cron from 'node-cron';

// Define a cron job that runs every minute
const task = cron.schedule('* * * * *', () => {
  const currentDateTime = new Date();
  console.log(`Task is running every minute at: ${currentDateTime}`);
});

// Start the task
task.start();

// Optional: To stop the task after a certain condition, use task.stop()
// Uncomment the following line to stop the task after 5 minutes
// setTimeout(() => task.stop(), 5 * 60 * 1000);

// Stop the task when the application is terminated
process.on('SIGINT', () => {
  task.stop();
  console.log('Cron job stopped.');
  process.exit();
});
npx ts-node cronJob.ts
