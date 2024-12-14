def is_palindrome(s):
    s = s.lower()  # convert string to lowercase for case-insensitive comparison
    s = "".join(c for c in s if c.isalnum())  # remove non-alphanumeric characters
    return s == s[::-1]
print(is_palindrome("A man, a plan, a canal, Panama"))  # Output: True
print(is_palindrome("Hello world"))  # Output: False
