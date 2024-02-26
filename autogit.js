function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert the string to lowercase
    const alphanumericStr = str.toLowerCase().replace(/[\W_]/g, '');

    // Reverse the string
    const reversedStr = alphanumericStr.split('').reverse().join('');

    // Check if the original string is equal to its reverse
    return alphanumericStr === reversedStr;
}

// Test the function
const str1 = "A man, a plan, a canal, Panama";
console.log(isPalindrome(str1)); // Output: true

const str2 = "Hello, world!";
console.log(isPalindrome(str2)); // Output: false
