import schedule
import time

def job():
    print("This is a cron job running at scheduled intervals")

# Schedule the job to run every minute
schedule.every().minute.do(job)

while True:
    schedule.run_pending()
    time.sleep(1)
pip install schedule
