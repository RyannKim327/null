npm install node-cron
npm install --save-dev @types/node-cron
import cron from 'node-cron';

const task = cron.schedule('* * * * *', () => {
  const now = new Date();
  console.log(`Cron job running at ${now.toLocaleTimeString()}`);
});

task.start();
