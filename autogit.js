function isPalindrome(str) {
    // Remove special characters and convert the string to lowercase
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

    // Reverse the string
    const reversed = str.split('').reverse().join('');

    // Check if the original string is equal to the reversed string
    return str === reversed;
}

// Test the function
const testString = "A man, a plan, a canal, Panama!";
console.log(isPalindrome(testString)); // Output: true
