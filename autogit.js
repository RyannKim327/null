from crontab import CronTab

# Create a new crontab object
cron = CronTab(user=True)

# Create a new job and set the schedule
job = cron.new(command='echo "Hello, World"', comment='my_job')
job.minute.on(0)
job.hour.on(12)

# Write the job to the crontab
cron.write()
