import os

def run_my_task():
    # Your task logic here
    print("Task executed at scheduled time")

# Cron expression for running the task every day at 3:00 PM
cron_expression = "0 15 * * *"

# Write out current cron job
current_cron = os.popen('crontab -l').read()

# Append new cron job to the existing cron jobs
new_cron = current_cron + '{} /usr/bin/python3 /path/to/your/script.py\n'.format(cron_expression)

# Load the new cron configuration
os.system('(crontab -l ; echo "{}") | crontab -'.format(new_cron))
