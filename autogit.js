function isPalindrome(str):
    reversedStr = reverseString(str)
    
    if str == reversedStr:
        return true
    else:
        return false

function reverseString(str):
    reversedStr = ""    
    for i from length of str - 1 to 0:
        reversedStr += str[i]
    
    return reversedStr
