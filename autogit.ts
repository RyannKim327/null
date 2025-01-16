import * as cron from 'cron';

// create a new cron job
const job = new cron.CronJob('0 0 2 * * *', () => {
  // this code will run every day at 2am
  console.log('Hello, world!');
  // you can add your own logic here
  // for example, you can make an API call, send an email, etc.
  fetch('https://api.example.com/do-something')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
});

// start the cron job
job.start();

// you can also manually trigger the job using the `run` method
// job.run();

// you can stop the cron job using the `stop` method
// job.stop();
npm install cron
yarn add cron
