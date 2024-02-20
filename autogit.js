function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert the string to lowercase
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Reverse the string
    const reversedStr = cleanStr.split('').reverse().join('');
    
    // Check if the original string is equal to the reversed string
    return cleanStr === reversedStr;
}

// Test the function
const testString = "A man, a plan, a canal, Panama!";
console.log(isPalindrome(testString)); // Output: true
