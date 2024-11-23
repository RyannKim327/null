function isPalindrome(s):
    n = length of s
    left = 0
    right = n - 1
    
    while left < right:
        if s[left] != s[right]:
            return false
        left = left + 1
        right = right - 1
        
    return true
