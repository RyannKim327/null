import * as cron from 'node-cron';

interface Job {
  id: string;
  cronExpression: string;
  task: () => void;
}

class CronJobManager {
  private jobs: Job[] = [];

  addJob(job: Job) {
    this.jobs.push(job);
    cron.schedule(job.cronExpression, job.task);
    console.log(`Job ${job.id} added with cron expression ${job.cronExpression}`);
  }

  start() {
    console.log('Cron job manager started');
  }

  stop() {
    this.jobs.forEach((job) => {
      cron.cancel(job.id);
      console.log(`Job ${job.id} stopped`);
    });
    console.log('Cron job manager stopped');
  }
}

const jobManager = new CronJobManager();

// Add some sample jobs
jobManager.addJob({
  id: 'job1',
  cronExpression: '0 0 12 * * *', // Run every day at 12:00 PM
  task: () => {
    console.log('Running job 1');
    // Do some task here
  },
});

jobManager.addJob({
  id: 'job2',
  cronExpression: '0 30 14 * * *', // Run every day at 2:30 PM
  task: () => {
    console.log('Running job 2');
    // Do some task here
  },
});

jobManager.start();

// Stop the job manager after 10 minutes
setTimeout(() => {
  jobManager.stop();
}, 600000);
