def is_palindrome(s):
    s = s.lower()  # Convert string to lowercase for case-insensitive comparison
    i, j = 0, len(s) - 1
    
    while i < j:
        if s[i] != s[j]:
            return False
        i += 1
        j -= 1
    
    return True

# Test the function
s = "racecar"
if is_palindrome(s):
    print(f"{s} is a palindrome")
else:
    print(f"{s} is not a palindrome")
