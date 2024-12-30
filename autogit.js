def is_palindrome(s):
    s = s.lower()  # Convert the string to lowercase
    s = ''.join([c for c in s if c.isalnum()])  # Remove non-alphanumeric characters
    return s == s[::-1]  # Check if the string is equal to its reverse

# Test the function
s = "A man, a plan, a canal, Panama!"
print(is_palindrome(s))  # Output: True
