\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b
import re

def validate_email(email):
    pattern = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
    if re.match(pattern, email):
        return True
    else:
        return False

# Test the function
email = "example@email.com"
if validate_email(email):
    print(f"{email} is a valid email address.")
else:
    print(f"{email} is not a valid email address.")
