const cron = require('cron');
 
// Define the cron expression for scheduling
const cronExpression = '0 * * * *'; // Runs every hour on the hour
 
// Create a new cron job
const job = new cron.CronJob(cronExpression, () => {
    // Task to be executed on every cron trigger
    console.log('Cron job executed');
});
 
// Start the cron job
job.start();
 
// You can also listen for specific events like 'start', 'stop', and 'complete'
job.on('start', () => {
    console.log('Cron job started');
});
 
job.on('stop', () => {
    console.log('Cron job stopped');
});
