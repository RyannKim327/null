import * as cron from 'node-cron';

interface Job {
  id: number;
  name: string;
  cronExpression: string;
  func: () => void;
}

const jobs: Job[] = [
  {
    id: 1,
    name: 'Daily Report',
    cronExpression: '0 0 * * *',
    func: () => {
      console.log('Generating daily report...');
      // generate report logic here
    }
  },
  {
    id: 2,
    name: 'Weekly Backup',
    cronExpression: '0 0 * * 0',
    func: () => {
      console.log('Running weekly backup...');
      // backup logic here
    }
  },
  {
    id: 3,
    name: 'Every 5 minutes',
    cronExpression: '*/5 * * * *',
    func: () => {
      console.log('Running every 5 minutes...');
      // logic here
    }
  }
];

jobs.forEach((job) => {
  cron.schedule(job.cronExpression, job.func);
  console.log(`Scheduled job ${job.name} to run on ${job.cronExpression}`);
});
