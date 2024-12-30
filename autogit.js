def is_palindrome(s):
    # Convert the string to lowercase
    s = s.lower()
    
    # Remove spaces and special characters from the string
    s = ''.join(e for e in s if e.isalnum())
    
    # Check if the string is a palindrome
    for i in range(len(s) // 2):
        if s[i] != s[len(s) - i - 1]:
            return False
    return True

# Test the function
string = "A man, a plan, a canal, Panama"
if is_palindrome(string):
    print("The string is a palindrome.")
else:
    print("The string is not a palindrome.")
