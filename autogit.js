import schedule
import time

def job():
    print("Hello, this is a scheduled task!")

# Schedule the job to run every minute
schedule.every().minute.do(job)

while True:
    schedule.run_pending()
    time.sleep(1)
