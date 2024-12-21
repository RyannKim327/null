def is_palindrome(s):
    # Remove non-alphanumeric characters and convert to lowercase
    s = ''.join(e for e in s if e.isalnum()).lower()
    
    # Compare the string with its reverse
    return s == s[::-1]

# Test the function with a sample string
sample_string = "A man, a plan, a canal, Panama"
if is_palindrome(sample_string):
    print("The string is a palindrome")
else:
    print("The string is not a palindrome")
