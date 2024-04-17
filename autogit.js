function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.toLowerCase().replace(/[\W_]/g, '');
    
    // Compare the string with its reverse
    return str === str.split('').reverse().join('');
}

// Example usage
const str1 = 'A man, a plan, a canal, Panama';
console.log(isPalindrome(str1)); // Output: true

const str2 = 'hello';
console.log(isPalindrome(str2)); // Output: false
