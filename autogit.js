function isPalindrome(str) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    str = str.toLowerCase().replace(/[\W_]/g, '');
    
    // Reverse the string
    const reversed = str.split('').reverse().join('');
    
    // Compare the original string with the reversed string
    return str === reversed;
}

// Test the function
const testString = 'A man, a plan, a canal, Panama!';
console.log(isPalindrome(testString)); // Output: true
