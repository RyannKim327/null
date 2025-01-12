import os
import datetime

# Define a function to send a daily report
def send_daily_report():
    # Get the current date
    today = datetime.date.today()
    # Create a report file
    report_file = f"report_{today}.txt"
    with open(report_file, "w") as f:
        f.write("Daily report for {}\n".format(today))
        # Add some random data to the report
        f.write("Random data: {}\n".format(os.urandom(16).hex()))
    # Send the report to a email address (e.g. using `sendmail` command)
    os.system(f"sendmail -t < {report_file} example@example.com")

# Use cron to schedule the function to run daily at 2am
if __name__ == "__main__":
    # Get the current minute and hour
    minute = datetime.datetime.now().minute
    hour = datetime.datetime.now().hour
    # Check if it's 2am and run the function
    if hour == 2 and minute == 0:
        send_daily_report()
    # Print a message to indicate the script has run
    print("Script has run!")
0 2 * * * python /path/to/this/script.py
