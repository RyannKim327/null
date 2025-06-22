import cron from 'node-cron';

// Function to execute the scheduled task
const performTask = () => {
    console.log('Good morning! This task runs every day at 9:00 AM.');
};

// Schedule the task using cron syntax
const scheduleTask = () => {
    // Cron format: "minute hour day-of-month month day-of-week"
    const task = cron.schedule('0 9 * * *', performTask, {
        scheduled: true, // Ensures the task is scheduled immediately
        timezone: 'UTC', // Optional: Set your desired timezone
    });

    console.log('Task has been scheduled to run every day at 9:00 AM UTC.');
    return task;
};

// Start the scheduler
const scheduledTask = scheduleTask();

// Optionally, you can stop the task after some time (e.g., for testing purposes)
setTimeout(() => {
    console.log('Stopping the scheduled task...');
    scheduledTask.stop();
}, 60000); // Stops the task after 60 seconds
