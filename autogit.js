import re

def validate_email(email):
    pattern = r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
    if re.match(pattern, email):
        return True
    else:
        return False

# Test the function
email = "example@example.com"
if validate_email(email):
    print("Email is valid")
else:
    print("Email is not valid")
