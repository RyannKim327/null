def is_palindrome(s):
    s = ''.join(e for e in s if e.isalnum()).lower()
    return s == s[::-1]

# Test the function
input_string = "A man, a plan, a canal, Panama"
result = is_palindrome(input_string)
if result:
    print("The input string is a palindrome.")
else:
    print("The input string is not a palindrome.")
