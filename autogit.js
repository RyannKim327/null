const cron = require('cron');

// Function to be executed
const myFunction = () => {
    console.log('Hello, World!');
};

// Cron job schedule
const cronJob = new cron.CronJob('*/1 * * * *', myFunction);

// Start the cron job
cronJob.start();
