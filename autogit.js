function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.toLowerCase().replace(/[\W_]/g, '');
    
    // Reverse the string
    const reversedStr = cleanStr.split('').reverse().join('');
    
    // Check if the reversed string is equal to the original
    return cleanStr === reversedStr;
}

// Test the function
const str1 = "A man, a plan, a canal, Panama";
console.log(isPalindrome(str1)); // Output: true

const str2 = "Hello, World!";
console.log(isPalindrome(str2)); // Output: false
