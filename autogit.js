function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert the string to lowercase
    const cleanStr = str.toLowerCase().replace(/[\W_]/g, '');
    
    // Compare the clean string with its reverse
    return cleanStr === cleanStr.split('').reverse().join('');
}

// Test the function
const str1 = "level";
console.log(isPalindrome(str1));  // Output: true

const str2 = "hello";
console.log(isPalindrome(str2));  // Output: false
