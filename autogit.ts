npm install node-cron
npm install --save-dev @types/node-cron
import cron from 'node-cron';

// Schedule a task to run every minute
cron.schedule('* * * * *', () => {
  console.log('Running task at', new Date().toLocaleString());
});

console.log('Cron job scheduled to run every minute');
