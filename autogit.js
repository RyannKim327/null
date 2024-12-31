def is_palindrome(s):
    # Remove spaces and convert string to lowercase
    s = s.replace(" ", "").lower()
    
    # Compare the string with its reverse
    return s == s[::-1]

# Test the function
input_string = "A man a plan a canal Panama"
if is_palindrome(input_string):
    print("The input string is a palindrome.")
else:
    print("The input string is not a palindrome.")
