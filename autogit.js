function isPalindrome(str) {
    // Remove special characters and convert to lowercase
    str = str.toLowerCase().replace(/[\W_]/g, '');
    
    // Compare the string with its reverse
    return str === str.split('').reverse().join('');
}

// Test the function
console.log(isPalindrome("A man, a plan, a canal, Panama")); //true
console.log(isPalindrome("Hello World")); //false
