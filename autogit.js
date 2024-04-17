function isPalindrome(str) {
    // Remove special characters and convert the string to lowercase
    var cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    // Reverse the string
    var reversed = cleanStr.split('').reverse().join('');
    
    // Check if the original string is equal to its reverse
    return cleanStr === reversed;
}

// Test the function
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("Hello world")); // false
