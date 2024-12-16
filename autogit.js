import schedule
import time

def job():
    print("Task executed")

# Schedules a job that runs every hour
schedule.every().hour.do(job)

# Keeps the script running so that scheduled tasks can be executed
while True:
    schedule.run_pending()
    time.sleep(1)
