function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert the string to lowercase
    const cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    // Compare the clean string with its reverse
    return cleanStr === cleanStr.split('').reverse().join('');
}

// Example usage
const inputString = "A man, a plan, a canal, Panama";
if (isPalindrome(inputString)) {
    console.log("The input string is a palindrome.");
} else {
    console.log("The input string is not a palindrome.");
}
