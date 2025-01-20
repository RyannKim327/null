import * as cron from 'cron';

interface ScheduledTask {
  cronJob: cron.ScheduledTask;
  taskName: string;
}

class Scheduler {
  private scheduledTasks: ScheduledTask[] = [];

  addTask(taskName: string, cronExpression: string, taskFunction: () => void) {
    const cronJob = new cron.CronJob(cronExpression, () => {
      console.log(` Running task: ${taskName} `);
      taskFunction();
    });
    this.scheduledTasks.push({ cronJob, taskName });
  }

  start() {
    this.scheduledTasks.forEach((task) => task.cronJob.start());
  }

  stop() {
    this.scheduledTasks.forEach((task) => task.cronJob.stop());
  }
}

const scheduler = new Scheduler();

scheduler.addTask('daily-report', '0 0 12 * * *', () => {
  console.log('Generating daily report...');
  // Generate daily report logic here
});

scheduler.addTask('weekly-backup', '0 0 0 * * 0', () => {
  console.log('Running weekly backup...');
  // Weekly backup logic here
});

scheduler.start();

// Stop all tasks after 1 hour
setTimeout(() => scheduler.stop(), 3600000);
