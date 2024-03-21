function isPalindrome(str) {
    if (str.length === 0 || str.length === 1) {
        return true;
    }
    
    let i = 0;
    let j = str.length - 1;
    
    while (i < j) {
        if (str[i] !== str[j]) {
            return false;
        }
        
        i++;
        j--;
    }
    
    return true;
}

// Test cases
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
