def is_palindrome(s):
    # Convert the string to lowercase and remove non-alphanumeric characters
    s = ''.join(e for e in s if e.isalnum()).lower()
    
    # Check if the string is equal to its reverse
    return s == s[::-1]

# Test the function
s = "A man, a plan, a canal, Panama"
if is_palindrome(s):
    print("The string is a palindrome.")
else:
    print("The string is not a palindrome.")
