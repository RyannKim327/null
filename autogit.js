const cron = require('node-cron');

// Define a function to be executed
function myFunction() {
  console.log('This function is executed at a specific time!');
}

// Schedule the function to be executed using cron syntax
cron.schedule('0 9 * * *', () => {
  myFunction();
  // This cron schedule will execute myFunction() at 9:00 AM every day
});
