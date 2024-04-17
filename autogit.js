function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const alphanumericStr = str.toLowerCase().replace(/[\W_]/g, '');
    
    // Reverse the string
    const reversedStr = alphanumericStr.split('').reverse().join('');
    
    // Check if the original string is equal to the reversed string
    return alphanumericStr === reversedStr;
}

// Test the function
const inputString = "A man, a plan, a canal, Panama!";
if (isPalindrome(inputString)) {
    console.log("The string is a palindrome.");
} else {
    console.log("The string is not a palindrome.");
}
