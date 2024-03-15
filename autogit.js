function isPalindrome(str) {
    // Remove all non-alphanumeric characters and convert to lowercase
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Check if the clean string is the same as its reverse
    return cleanStr === cleanStr.split('').reverse().join('');
}

// Test the function
const str1 = "A man, a plan, a canal, Panama";
console.log(isPalindrome(str1)); // Output: true

const str2 = "hello world";
console.log(isPalindrome(str2)); // Output: false
