def is_palindrome(s):
    s = s.lower()  # Convert the string to lowercase
    s = ''.join(e for e in s if e.isalnum())  # Remove non-alphanumeric characters
    return s == s[::-1]

# Test the function
input_string = "A man, a plan, a canal: Panama"
if is_palindrome(input_string):
    print("Palindrome")
else:
    print("Not a palindrome")
