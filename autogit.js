function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert the string to lowercase
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Compare the string with its reverse
    return str === str.split('').reverse().join('');
}

// Test the function
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("hello world")); // false
