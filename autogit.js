import schedule
import time

def job():
    print("Task is running...")

schedule.every().day.at("08:00").do(job)
schedule.every().wednesday.at("13:00").do(job)

while True:
    schedule.run_pending()
    time.sleep(1)
