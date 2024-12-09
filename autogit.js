import re

def validate_email(email):
    regex = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
    if re.match(regex, email):
        return True
    else:
        return False

email = "example@email.com"
if validate_email(email):
    print("Email is valid")
else:
    print("Email is not valid")
