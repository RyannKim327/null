function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert the string to lowercase
    const alphanumericStr = str.replace(/[\W_]/g, '').toLowerCase();
    
    // Reverse the string
    const reversedStr = alphanumericStr.split('').reverse().join('');
    
    // Check if the original string is equal to the reversed string
    return alphanumericStr === reversedStr;
}

// Test the function
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("Hello, World!")); // false
