function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert the string to lowercase
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Compare the clean string with its reverse
    return cleanStr === cleanStr.split('').reverse().join('');
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("Hello, World!")); // Output: false
