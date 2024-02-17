const cron = require('node-cron');

cron.schedule('* * * * *', () => {
  const date = new Date();
  console.log(`Current date and time: ${date}`);
});
npm install node-cron
