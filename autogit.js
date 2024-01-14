const cron = require('node-cron');

// Define a function to be executed
const myFunction = () => {
  console.log('Running myFunction at', new Date());
};

// Schedule the function to run every minute using cron syntax
cron.schedule('* * * * *', myFunction);
