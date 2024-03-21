const cron = require('node-cron');

// Schedule a task to run every minute
cron.schedule('* * * * *', () => {
    console.log('This task runs every minute.');
});

// Schedule a task to run at 12:00 PM every day
cron.schedule('0 12 * * *', () => {
    console.log('This task runs at 12:00 PM every day.');
});
