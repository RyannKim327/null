npm install -g typescript
mkdir my-cron-app
cd my-cron-app
npm init -y
npm install node-cron
npm install --save-dev @types/node
import cron from 'node-cron';

// Schedule a task to run every minute
const task = cron.schedule('* * * * *', () => {
  console.log(`Current Date and Time: ${new Date().toLocaleString()}`);
});

// Start the cron job
task.start();

// Optional: Stop the task after 5 minutes (just for demonstration)
setTimeout(() => {
  task.stop();
  console.log('Cron job stopped.');
}, 5 * 60 * 1000);
tsc cron-job.ts
node cron-job.js
