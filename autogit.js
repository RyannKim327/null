function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.toLowerCase().replace(/[\W_]/g, '');
    
    // Reverse the string
    let reversedStr = str.split('').reverse().join('');
    
    // Check if the original string is equal to the reversed string
    return str === reversedStr;
}

// Test the function
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("hello")); // false
