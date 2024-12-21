def is_palindrome(s):
    s = s.lower().replace(" ", "")  # Convert the string to lowercase and remove spaces
    return s == s[::-1]

# Test the function
string = "A man a plan a canal Panama"
if is_palindrome(string):
    print("Palindrome")
else:
    print("Not a palindrome")
