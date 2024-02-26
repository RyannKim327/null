function isPalindrome(str) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Reverse the cleaned string
    const reversedStr = cleanStr.split('').reverse().join('');
    
    // Check if the cleaned string is equal to the reversed string
    return cleanStr === reversedStr;
}

// Test the function
const testString = "A man, a plan, a canal, Panama";
console.log(isPalindrome(testString)); // Output: true
