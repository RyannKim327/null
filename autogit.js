const cron = require('node-cron');

const task = cron.schedule('*/5 * * * * *', () => {
  console.log('This task runs every 5 seconds');
});

task.start();
