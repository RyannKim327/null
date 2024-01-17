const cron = require('node-cron');

cron.schedule('*/5 * * * *', () => {
  // This code will run every 5 minutes

  // Add your desired functionality here
  console.log('Running cron job...');
});
