def is_palindrome(s):
    # Function to check if a string is a valid palindrome
    i, j = 0, len(s) - 1
    
    while i < j:
        # Ignore non-alphanumeric characters
        while i < j and not s[i].isalnum():
            i += 1
        while i < j and not s[j].isalnum():
            j -= 1
        
        # Convert characters to lowercase to ignore case sensitivity
        if s[i].lower() != s[j].lower():
            return False
        
        i += 1
        j -= 1
    
    return True

# Test the function
s = "A man, a plan, a canal, Panama"
if is_palindrome(s):
    print("The string is a valid palindrome.")
else:
    print("The string is not a valid palindrome.")
