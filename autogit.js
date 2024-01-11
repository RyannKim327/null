function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const modifiedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Reverse the modified string
    const reversedStr = modifiedStr.split('').reverse().join('');

    // Check if reversed string is the same as the original string
    return modifiedStr === reversedStr;
}

// Example usage
const word = "Madam";
console.log(isPalindrome(word)); // Output: true

const sentence = "A man, a plan, a canal, Panama!";
console.log(isPalindrome(sentence)); // Output: true

const notPalindrome = "Hello, world!";
console.log(isPalindrome(notPalindrome)); // Output: false
