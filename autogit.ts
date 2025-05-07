import cron from 'node-cron';

// Schedule a task to run every minute
cron.schedule('* * * * *', () => {
  const now = new Date();
  console.log(`Task running at ${now.toLocaleTimeString()}`);
});
npm install node-cron
npm install --save-dev @types/node-cron
