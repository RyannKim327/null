import cron from 'node-cron';

// Function to be executed by the cron job
const performTask = () => {
    const currentTime = new Date().toISOString();
    console.log(`Task executed at: ${currentTime}`);
};

// Schedule a cron job to run every 5 minutes
const scheduleCronJob = () => {
    console.log('Scheduling cron job...');
    
    // Cron syntax: "Minute Hour DayOfMonth Month DayOfWeek"
    // This example runs the task every 5 minutes
    cron.schedule('*/5 * * * *', () => {
        console.log('Running scheduled task...');
        performTask();
    });

    console.log('Cron job has been scheduled.');
};

// Start the cron job
scheduleCronJob();

// Keep the script running
console.log('Press Ctrl+C to stop the script.');
