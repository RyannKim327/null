function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert the string to lowercase
    str = str.replace(/[\W_]/g, '').toLowerCase();

    // Compare the original string with its reverse
    return str === str.split('').reverse().join('');
}

// Test the function
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("hello")); // Output: false
