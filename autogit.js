function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert the string to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Compare characters from start and end of the string
    for (let i = 0; i < Math.floor(cleanedStr.length / 2); i++) {
        if (cleanedStr[i] !== cleanedStr[cleanedStr.length - 1 - i]) {
            return false;
        }
    }
    
    return true;
}

// Test the function
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
