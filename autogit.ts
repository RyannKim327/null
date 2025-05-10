import cron from 'node-cron';

// Schedule a task to run every minute
cron.schedule('* * * * *', () => {
  const now = new Date();
  console.log(`Task executed at ${now.toISOString()}`);
});

console.log('Cron job scheduled. It will execute every minute.');
