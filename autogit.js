from croniter import croniter
from datetime import datetime

# Define the cron schedule
schedule = '*/1 * * * *'  # Run every minute

# Create a cron iterator object
cron = croniter(schedule, datetime.now())

# Get the next 5 execution times
next_runtimes = [cron.get_next(datetime) for _ in range(5)]

print("Next 5 runtimes:")
for runtime in next_runtimes:
    print(runtime)
