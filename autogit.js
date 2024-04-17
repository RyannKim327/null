function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert string to lowercase
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    // Compare the string with its reverse
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

// Test the function
const str1 = "A man, a plan, a canal, Panama";
console.log(isPalindrome(str1)); // Output: true

const str2 = "Hello, world!";
console.log(isPalindrome(str2)); // Output: false
