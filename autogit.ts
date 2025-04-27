import cron from 'node-cron';

// Schedule a task to run every minute
const task = cron.schedule('* * * * *', () => {
  console.log('Running task every minute at', new Date().toLocaleString());
});

// Start the scheduled task
task.start();
npm init -y
npm install node-cron
npm install --save-dev typescript @types/node @types/node-cron
npx tsc cron-example.ts
node cron-example.js
