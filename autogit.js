function isPalindrome(str) {
    // Remove special characters and convert to lowercase
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    
    // Reverse the string
    const reversed = str.split('').reverse().join('');
    
    // Check if the original string is equal to the reversed string
    return str === reversed;
}

// Test the function with some examples
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
