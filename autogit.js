function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert the string to lowercase
    str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    // Reverse the string
    let reversedStr = str.split('').reverse().join('');
    
    // Check if the original string is equal to its reversed version
    return str === reversedStr;
}

// Test the function
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("hello")); // Output: false
