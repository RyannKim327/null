function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Compare the clean string with its reverse
    return cleanStr === cleanStr.split('').reverse().join('');
}

// Test the function
const str = "A man, a plan, a canal, Panama!";
if (isPalindrome(str)) {
    console.log(`${str} is a palindrome.`);
} else {
    console.log(`${str} is not a palindrome.`);
}
