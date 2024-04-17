function isPalindrome(str) {
    // Remove special characters and convert the string to lowercase
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Create a reversed version of the string
    let reversed = str.split('').reverse().join('');
    
    // Check if the string and its reversed version are the same
    return str === reversed;
}

// Test the function
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("hello")); // Output: false
