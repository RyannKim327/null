function isPalindrome(str) {
    // Remove non-alphanumeric characters from the string and convert it to lowercase
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Compare the original string with its reverse
    return str === str.split('').reverse().join('');
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("race car")); // true
console.log(isPalindrome("hello world")); // false
