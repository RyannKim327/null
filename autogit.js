def is_palindrome(s):
    s = s.lower()
    s = ''.join(e for e in s if e.isalnum())
    return s == s[::-1]

string = "A man, a plan, a canal, Panama"
if is_palindrome(string):
    print("It's a palindrome!")
else:
    print("It's not a palindrome.")
