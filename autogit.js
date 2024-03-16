const cron = require('node-cron');

// Schedule a job to run every minute
cron.schedule('* * * * *', () => {
    console.log('Running a job every minute!');
});

// Schedule a job to run at 12:00 PM every day
cron.schedule('0 12 * * *', () => {
    console.log('Running a job at 12:00 PM every day!');
});

// Run a job every Friday at 5:30 PM
cron.schedule('30 17 * * Friday', () => {
    console.log('Running a job every Friday at 5:30 PM!');
});
npm install node-cron
