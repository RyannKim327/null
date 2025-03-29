import cron from 'node-cron';

cron.schedule('* * * * *', () => {
  console.log('Running a task every minute');
});
