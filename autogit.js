function isPalindrome(s) {
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
        while (!isAlphanumeric(s[i]) && i < j) i++; // Skip non-alphanumeric characters from the start
        while (!isAlphanumeric(s[j]) && i < j) j--; // Skip non-alphanumeric characters from the end
        
        if (s[i].toLowerCase() !== s[j].toLowerCase()) {
            return false;
        }
    }
    
    return true;
}

function isAlphanumeric(char) {
    return /^[a-zA-Z0-9]*$/.test(char);
}

// Test the function
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("race a car")); // false
