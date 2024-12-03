from crontab import CronTab

cron = CronTab(user=True)  # Access the cron table of the current user

job = cron.new(command='echo "Hello, World!"')
job.minute.every(1)  # Run the job every minute

cron.write()  # Write the changes to the user's crontab
