function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Reverse the cleaned string
    const reversedStr = cleanStr.split('').reverse().join('');
    
    // Check if the original and reversed strings are the same
    return cleanStr === reversedStr;
}

// Test the function
const inputString = "A man, a plan, a canal, Panama!";
console.log(isPalindrome(inputString)); // Output: true
