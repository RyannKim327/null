from cron import Cron

def my_task():
    print("Task executed at", datetime.datetime.now())

my_cron = Cron()
my_cron.schedule("*/1 * * * *", my_task)  # Run every minute

try:
    my_cron.run()
except KeyboardInterrupt:
    my_cron.stop()
