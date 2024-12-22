import subprocess

# Execute a shell command using cron
command = 'echo "Hello, world!"'  # Example command
cron_expression = '* * * * *'  # Run every minute

# Create a cron job to run the command
cron_job = f'echo "{cron_expression} {command}" | crontab -'
subprocess.call(cron_job, shell=True)
