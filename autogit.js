function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert the string to lowercase
    const formattedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    // Compare the formatted string with its reverse
    return formattedStr === formattedStr.split('').reverse().join('');
}

// Test the function
const str1 = "A man, a plan, a canal, Panama";
console.log(isPalindrome(str1)); // Output: true

const str2 = "hello";
console.log(isPalindrome(str2)); // Output: false
