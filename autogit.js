function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert the string to lowercase
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Reverse the cleaned string
    const reversedStr = cleanStr.split('').reverse().join('');
    
    // Check if the cleaned string is equal to its reversed version
    return cleanStr === reversedStr;
}

// Test the function
const testString = "A man, a plan, a canal, Panama!";
console.log(isPalindrome(testString)); // Output: true
