def is_palindrome(s):
    s = s.lower().replace(' ', '')  # Convert to lowercase and remove spaces
    return s == s[::-1]  # Check if the string is equal to its reverse

# Test the function
input_str = "A man a plan a canal Panama"
if is_palindrome(input_str):
    print("Palindrome")
else:
    print("Not a palindrome")
