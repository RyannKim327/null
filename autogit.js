def is_palindrome(s):
    # Remove spaces and convert to lowercase
    s = ''.join(e for e in s if e.isalnum()).lower()
    
    # Compare original string with its reverse
    return s == s[::-1]

# Test the function
string = "A man, a plan, a canal, Panama"
if is_palindrome(string):
    print("It is a palindrome")
else:
    print("It is not a palindrome")
