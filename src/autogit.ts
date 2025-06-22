npm install node-cron
import cron from "node-cron";

// Define a function to be executed by the cron job
const performTask = () => {
    console.log("Task executed!");
};

// Schedule the task using cron syntax
// This example runs the task every minute
const task = cron.schedule("* * * * *", performTask, {
    scheduled: true, // Ensure the task is scheduled immediately
    timezone: "UTC", // Specify the timezone (optional)
});

console.log("Cron job has been scheduled. Waiting for execution...");

// Optionally, you can stop the cron job after some time
setTimeout(() => {
    console.log("Stopping the cron job...");
    task.stop(); // Stop the cron job
}, 60000); // Stops the job after 60 seconds
Cron job has been scheduled. Waiting for execution...
Task executed!
Task executed!
Stopping the cron job...
