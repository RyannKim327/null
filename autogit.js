import cron

# Define a cron schedule to run a task every minute
schedule = cron.CronTab('* * * * *')

# Define the task to be executed
def my_task():
    print("Executing my task...")

# Schedule the task
job = schedule.do(my_task)

# Run the scheduler
while True:
    schedule.run()
