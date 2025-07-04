import cron from 'node-cron';

// Schedule a task to run every minute
const task = cron.schedule('* * * * *', () => {
    const date = new Date();
    console.log(`Task executed at: ${date.toISOString()}`);
});

// Start the cron job
task.start();

// Optionally: Stop the cron job after 5 minutes for demonstration
setTimeout(() => {
    task.stop();
    console.log('Cron job stopped.');
}, 5 * 60 * 1000); // 5 minutes in milliseconds
