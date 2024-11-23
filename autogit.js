import datetime
import os

now = datetime.datetime.now()
print("Current date and time:", now)

# Add your task here
os.system("echo 'Hello, World!' > output.txt")

# Schedule this script to run at a specific time using cron
# Example cron job: Run the script every day at 2:30 PM
# 30 14 * * * /usr/bin/python3 /path/to/your/script.py
