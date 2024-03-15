function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/[\W_]/g, '').toLowerCase();
    
    // Reverse the cleaned string
    const reversedStr = cleanStr.split('').reverse().join('');
    
    // Check if the original string is equal to the reversed string
    return cleanStr === reversedStr;
}

// Test the function
const testString = "A man, a plan, a canal, Panama!";
if (isPalindrome(testString)) {
    console.log(testString + " is a palindrome.");
} else {
    console.log(testString + " is not a palindrome.");
}
