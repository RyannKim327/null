def is_palindrome(s):
    start = 0
    end = len(s) - 1

    while start < end:
        if s[start] != s[end]:
            return False
        start += 1
        end -= 1

    return True

s = "madam"
if is_palindrome(s):
    print("Palindrome")
else:
    print("Not a palindrome")
