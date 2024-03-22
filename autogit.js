function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.toLowerCase().replace(/[\W_]/g, '');

    // Compare the cleaned string with its reversed version
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

// Example usage
const str = "A man, a plan, a canal, Panama";
if (isPalindrome(str)) {
    console.log(`${str} is a palindrome.`);
} else {
    console.log(`${str} is not a palindrome.`);
}
