function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    let formattedStr = str.replace(/[\W_]/g, '').toLowerCase();

    // Check if the string is a palindrome
    for (let i = 0; i < formattedStr.length / 2; i++) {
        if (formattedStr[i] !== formattedStr[formattedStr.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

// Test the function
const str1 = "A man, a plan, a canal, Panama";
console.log(isPalindrome(str1)); // Output: true

const str2 = "hello world";
console.log(isPalindrome(str2)); // Output: false
