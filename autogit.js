function isPalindrome(str) {
    // Remove non-alphanumeric characters from the string and convert it to lowercase
    const cleanedStr = str.toLowerCase().replace(/[\W_]/g, '');
    
    // Compare the cleaned string to its reverse
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

// Test the function
const testStr1 = "A man, a plan, a canal, Panama!";
const testStr2 = "Hello, World!";
console.log(isPalindrome(testStr1)); // Output: true
console.log(isPalindrome(testStr2)); // Output: false
