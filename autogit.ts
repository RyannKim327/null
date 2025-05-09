import cron from 'node-cron';

// Schedule a task to run every minute
cron.schedule('* * * * *', () => {
  console.log('Cron job running at:', new Date().toLocaleString());
});
npm init -y
npm install node-cron
npm install --save-dev @types/node
npx ts-node cron-example.ts
