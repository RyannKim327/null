function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    // Compare the original string with its reversed version
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

// Test the function
const str = "A man, a plan, a canal, Panama!";
if (isPalindrome(str)) {
    console.log("It's a palindrome!");
} else {
    console.log("It's not a palindrome!");
}
