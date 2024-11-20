def is_palindrome(s):
    # Remove spaces and special characters and convert to lowercase
    s = ''.join(e for e in s if e.isalnum()).lower()
    
    # Reverse the string
    reversed_s = s[::-1]
    
    # Compare the original string with the reversed string
    return s == reversed_s

# Test the function
string = "A man, a plan, a canal, Panama!"
if is_palindrome(string):
    print("The string is a palindrome.")
else:
    print("The string is not a palindrome.")
