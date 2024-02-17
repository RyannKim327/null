function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert the string to lowercase
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

    // Compare the string to its reverse
    return str === str.split('').reverse().join('');
}

// Test the function
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("Hello, World!")); // Output: false
