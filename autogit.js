function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert the string to lowercase
    const alphanumericStr = str.replace(/[^0-9a-z]/gi, '').toLowerCase();

    // Reverse the alphanumeric string
    const reversedStr = alphanumericStr.split('').reverse().join('');

    // Check if the original string is equal to its reverse
    return alphanumericStr === reversedStr;
}

// Test the function
const str = "A man, a plan, a canal, Panama!";
console.log(isPalindrome(str)); // Output: true
