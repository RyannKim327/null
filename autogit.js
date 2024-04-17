function isPalindrome(str) {
    // Remove non-alphanumeric characters from the string
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Check if the string is equal to its reverse
    return str === str.split('').reverse().join('');
}

// Test the function
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("hello")); // Output: false
