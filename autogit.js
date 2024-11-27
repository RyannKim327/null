def is_palindrome(s):
    s = s.lower()  # Convert the string to lowercase
    s = ''.join(e for e in s if e.isalnum())  # Remove non-alphanumeric characters
    return s == s[::-1]  # Check if the string is equal to its reverse

# Test the function
s = "A man, a plan, a canal, Panama"
if is_palindrome(s):
    print("It's a palindrome!")
else:
    print("It's not a palindrome.")
