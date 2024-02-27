function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.replace(/[\W_]/g, '').toLowerCase();
    
    // Reverse the string
    const reversedStr = str.split('').reverse().join('');
    
    // Compare the original string with the reversed string
    return str === reversedStr;
}

// Test the function with some examples
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("race car")); // Output: true
console.log(isPalindrome("hello world")); // Output: false
