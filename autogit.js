const cron = require('node-cron');

cron.schedule('*/5 * * * *', () => {
  console.log('This function runs every 5 minutes');
});
