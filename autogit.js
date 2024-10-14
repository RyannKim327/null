import re

def validate_email(email):
    pattern = r'^[\w\.-]+@[\w\.-]+\.\w+$'
    if re.match(pattern, email):
        return True
    else:
        return False

email = "example@example.com"
if validate_email(email):
    print("Email is valid")
else:
    print("Email is invalid")
