from cron import CronTab

# Create a new CronTab object
cron = CronTab()

# Define a new cron job
job = cron.new(command='echo "Hello, World"', comment='Print Hello, World')

# Schedule the job to run every minute
job.minute.every(1)

# Write the cron job to the user's crontab file
cron.write()
