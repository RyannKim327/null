def is_palindrome(s):
    s = s.lower()  # Convert the string to lowercase for case-insensitive comparison
    return s == s[::-1]

# Test the function
input_string = "Rotor"
if is_palindrome(input_string):
    print("The string is a palindrome.")
else:
    print("The string is not a palindrome.")
