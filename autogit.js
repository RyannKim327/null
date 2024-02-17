function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.toLowerCase().replace(/[\W_]/g, '');

    // Reverse the cleaned string
    const reversedStr = cleanedStr.split('').reverse().join('');

    // Check if the original string is equal to the reversed string
    return cleanedStr === reversedStr;
}

// Test the function
const testString1 = "A man, a plan, a canal, Panama";
console.log(isPalindrome(testString1)); // Output: true

const testString2 = "Hello, world!";
console.log(isPalindrome(testString2)); // Output: false
