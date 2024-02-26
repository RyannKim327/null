function isPalindrome(str) {
    // Remove special characters and convert string to lowercase
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

    // Reverse the string
    var reversedStr = str.split('').reverse().join('');

    // Check if the original string is equal to its reverse
    return str === reversedStr;
}

// Test the function
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("Hello, world!")); // false
