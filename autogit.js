import schedule
import time

def job():
    print("Task is running...")

# Schedule the task to run every minute
schedule.every().minute.do(job)

while True:
    schedule.run_pending()
    time.sleep(1)
