function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.toLowerCase().replace(/[\W_]/g, '');
    
    // Compare the original string with its reverse
    return str === str.split('').reverse().join('');
}

// Test the function
const string1 = "A man, a plan, a canal, Panama!";
console.log(isPalindrome(string1)); // Output: true

const string2 = "Hello, world!";
console.log(isPalindrome(string2)); // Output: false
