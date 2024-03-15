const cron = require('cron');

const job = new cron.CronJob('* * * * *', function() {
  console.log('This job runs every minute');
}, null, true);

job.start();
