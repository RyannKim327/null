const cron = require('node-cron');

// Run a task every day at 8:00 AM
cron.schedule('0 8 * * *', () => {
    console.log('Running task at 8:00 AM');
});

// Run a task every Sunday at 10:00 PM
cron.schedule('0 22 * * 0', () => {
    console.log('Running task at 10:00 PM on Sundays');
});
