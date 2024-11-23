def is_palindrome(s):
    s = ''.join(e for e in s if e.isalnum()).lower()
    return s == s[::-1]

# Test the function
s = "A man, a plan, a canal: Panama"
if is_palindrome(s):
    print("The string is a palindrome.")
else:
    print("The string is not a palindrome.")
