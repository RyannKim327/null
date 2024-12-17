def is_palindrome(s):
    start = 0
    end = len(s) - 1

    while start < end:
        # Skip non-alphanumeric characters
        if not s[start].isalnum():
            start += 1
        elif not s[end].isalnum():
            end -= 1
        # Compare characters ignoring case
        elif s[start].lower() != s[end].lower():
            return False
        else:
            start += 1
            end -= 1

    return True

# Test the function
s = "A man, a plan, a canal, Panama!"
print(is_palindrome(s))  # Output: True
