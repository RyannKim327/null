const cron = require('node-cron');

// Schedule a task to run every minute
cron.schedule('* * * * *', () => {
    console.log('Running a task every minute!');
});

// Schedule a task to run at 12 PM every day
cron.schedule('0 12 * * *', () => {
    console.log('Running a task at 12 PM every day!');
});
npm install node-cron
