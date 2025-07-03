npm install node-cron
import cron from 'node-cron';

// Schedule a task to run every minute
cron.schedule('* * * * *', () => {
  const now = new Date();
  console.log(`Current time is: ${now.toLocaleString()}`);
});

console.log('Cron job scheduled to run every minute...');
tsc cron-example.ts
node cron-example.js
