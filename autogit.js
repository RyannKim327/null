import os

# Define the cron settings
cron_settings = "0 0 * * *"

# Define the command to be executed by cron
cron_command = "python myscript.py"

# Write the cron job to the crontab
os.system(f'(crontab -l ; echo "{cron_settings} {cron_command}") | crontab -')
