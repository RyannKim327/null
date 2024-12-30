import schedule
import time

def job():
    print("This job is executed every minute")

# Schedule a job to run every minute
schedule.every().minute.do(job)

while True:
    schedule.run_pending()
    time.sleep(1)
