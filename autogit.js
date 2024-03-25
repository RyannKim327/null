function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert the string to lowercase
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Reverse the string
    var reversed = str.split('').reverse().join('');
    
    // Check if the original string is equal to the reversed string
    return str === reversed;
}

// Test the function
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("Hello World")); // Output: false
console.log(isPalindrome("Madam")); // Output: true
