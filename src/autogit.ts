mkdir my-cron-app
cd my-cron-app
npm init -y
npm install typescript @types/node node-cron
npm install -g typescript
npx tsc --init
touch cronJob.ts
import cron from 'node-cron';

// Schedule a task to run every minute
const task = cron.schedule('* * * * *', () => {
    const now = new Date();
    console.log(`Cron job executed at: ${now.toLocaleString()}`);
});

// Start the cron job
task.start();

// Optional: Stop the cron job after 5 minutes
setTimeout(() => {
    task.stop();
    console.log('Cron job stopped.');
}, 5 * 60 * 1000);  // Stops after 5 minutes
npx tsc
node cronJob.js
