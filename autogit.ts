import cron from 'node-cron';

// Schedule a task to run every minute
cron.schedule('* * * * *', () => {
  console.log('Running a task every minute:', new Date().toLocaleTimeString());
});
npm install node-cron
npm install --save-dev typescript @types/node
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true
  }
}
npx tsc cron-example.ts
node cron-example.js
