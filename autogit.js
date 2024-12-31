def is_palindrome(s):
    # Remove non-alphanumeric characters and convert to lowercase
    cleaned_string = ''.join(c.lower() for c in s if c.isalnum())
    # Compare cleaned string with its reverse
    return cleaned_string == cleaned_string[::-1]

# Test the function
input_string = "A man, a plan, a canal, Panama!"
if is_palindrome(input_string):
    print("The string is a palindrome.")
else:
    print("The string is not a palindrome.")
