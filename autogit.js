function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[\W_]/g, '').toLowerCase();
    
    // Compare the cleaned string with its reverse
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

// Test the function
const testString = "A man, a plan, a canal, Panama!";
if (isPalindrome(testString)) {
    console.log(`${testString} is a palindrome.`);
} else {
    console.log(`${testString} is not a palindrome.`);
}
