function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.toLowerCase().replace(/[\W_]/g, '');
    
    // Compare the original string with its reversed version
    return str === str.split('').reverse().join('');
}

// Test the function
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
