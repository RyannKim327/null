import cron from 'node-cron';

// Schedule a task to run every minute
cron.schedule('* * * * *', () => {
  const now = new Date();
  console.log(`Current time: ${now.toISOString()}`);
});

console.log('Cron job scheduled to run every minute.');
