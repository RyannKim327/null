import re

def validate_email(email):
    # Regular expression pattern for validating email addresses
    pattern = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'

    # Check if the email matches the pattern
    if re.match(pattern, email):
        return True
    else:
        return False

# Test the function
email = "example@email.com"
if validate_email(email):
    print("Valid email address")
else:
    print("Invalid email address")
