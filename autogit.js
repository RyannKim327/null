function isPalindrome(str) {
    // Remove special characters and spaces from the string
    const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

    // Reverse the string
    const reversedStr = cleanStr.split('').reverse().join('');

    // Check if the original string is equal to its reversed version
    return cleanStr === reversedStr;
}

// Test the function
const string1 = "A man, a plan, a canal, Panama";
console.log(isPalindrome(string1)); // Output: true

const string2 = "hello world";
console.log(isPalindrome(string2)); // Output: false
