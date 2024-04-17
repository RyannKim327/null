function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const alphanumericStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Check if the string is equal to its reverse
    return alphanumericStr === alphanumericStr.split('').reverse().join('');
}

// Test the function
const str1 = "A man, a plan, a canal, Panama!";
console.log(isPalindrome(str1)); // true

const str2 = "Hello, World!";
console.log(isPalindrome(str2)); // false
