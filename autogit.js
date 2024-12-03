def is_palindrome(s):
    s = s.lower()  # Convert the string to lowercase
    s = ''.join(e for e in s if e.isalnum())  # Remove non-alphanumeric characters
    return s == s[::-1]

# Test the function
s = "A man, a plan, a canal, Panama"
if is_palindrome(s):
    print("String is a palindrome")
else:
    print("String is not a palindrome")
