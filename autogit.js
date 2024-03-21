function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert the string to lowercase
    const formattedStr = str.toLowerCase().replace(/[\W_]/g, '');

    // Check if the formatted string is equal to its reverse
    return formattedStr === formattedStr.split('').reverse().join('');
}

// Test the function
const str = "A man, a plan, a canal, Panama";
console.log(isPalindrome(str)); // Output: true
