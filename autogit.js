def is_palindrome(s):
    s = s.lower().replace(" ", "")  # Convert to lowercase and remove spaces
    return s == s[::-1]

# Test the function
test_string = "A man a plan a canal Panama"
print(is_palindrome(test_string))  # Output: True
