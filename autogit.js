const { CronJob } = require('cron');

const job = new CronJob('* * * * *', function() {
  console.log('This function will be executed every minute.');
});

job.start();
