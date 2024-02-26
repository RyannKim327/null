function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert the string to lowercase
    str = str.replace(/[\W_]/g, '').toLowerCase();
    
    // Reverse the string
    const reversed = str.split('').reverse().join('');
    
    // Check if the original string is equal to the reversed string
    return str === reversed;
}

// Test the function
const testStr = "A man, a plan, a canal, Panama";
console.log(isPalindrome(testStr)); // Output: true
