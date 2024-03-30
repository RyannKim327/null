function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert the string to lowercase
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Compare the clean string with its reversed version
    return cleanStr === cleanStr.split('').reverse().join('');
}

// Test the function
const str1 = "A man, a plan, a canal, Panama";
console.log(isPalindrome(str1));  // Output: true

const str2 = "Hello, World!";
console.log(isPalindrome(str2));  // Output: false
