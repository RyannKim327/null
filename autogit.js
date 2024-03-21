function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert the string to lowercase
    const alphanumericStr = str.toLowerCase().replace(/[\W_]/g, '');

    // Reverse the alphanumeric string
    const reversedStr = alphanumericStr.split('').reverse().join('');

    // Check if the original string is the same as the reversed string
    return alphanumericStr === reversedStr;
}

// Test the function
const testString = "A man, a plan, a canal, Panama!";
console.log(isPalindrome(testString)); // Output: true
