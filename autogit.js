function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const alphanumericStr = str.toLowerCase().replace(/[\W_]/g, '');
    
    // Reverse the string and compare with the original string
    return alphanumericStr === alphanumericStr.split('').reverse().join('');
}

// Test the function
const testString = "A man, a plan, a canal, Panama!";
console.log(isPalindrome(testString)); // Output: true
