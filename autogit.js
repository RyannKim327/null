def is_palindrome(s):
    left, right = 0, len(s) - 1
    
    while left < right:
        if s[left] != s[right]:
            return False
        left += 1
        right -= 1
    
    return True

# Test the function
s = "madam"
if is_palindrome(s):
    print("The string is a palindrome.")
else:
    print("The string is not a palindrome.")
