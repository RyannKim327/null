from cron import Cron

def my_task():
    print("Executing my task")

# Define a cron schedule to run the task every minute
cron = Cron()
cron.schedule("*/1 * * * *", my_task)

# Run the cron job
cron.run_forever()
