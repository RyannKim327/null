^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$
import re

def validate_email(email):
    pattern = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
    if re.match(pattern, email):
        return True
    else:
        return False

# Test the function
email = "someone@example.com"
if validate_email(email):
    print("Email is valid")
else:
    print("Email is not valid")
function validateEmail(email) {
    let pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return pattern.test(email);
}

// Test the function
let email = "someone@example.com";
if (validateEmail(email)) {
    console.log("Email is valid");
} else {
    console.log("Email is not valid");
}
