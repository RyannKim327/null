npm install node-cron
const cron = require('node-cron');

// Define a task to be executed
const task = () => {
    console.log('Running task at:', new Date());
}

// Schedule the task to run every minute
cron.schedule('* * * * *', task);
