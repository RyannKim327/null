def is_palindrome(input_string):
    # Removing special characters and spaces
    input_string = ''.join(e for e in input_string if e.isalnum())
    input_string = input_string.lower()

    # Checking if the string is a palindrome
    if input_string == input_string[::-1]:
        return True
    else:
        return False

# Test the function
input_string = "A man, a plan, a canal, Panama"
if is_palindrome(input_string):
    print("The string is a palindrome.")
else:
    print("The string is not a palindrome.")
