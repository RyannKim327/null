const cron = require('node-cron');

// Define a function to be executed
function myFunction() {
  console.log('Function executed at:', new Date());
  // Place your code logic here
}

// Schedule the function to run every minute using cron syntax
cron.schedule('* * * * *', () => {
  myFunction();
});
