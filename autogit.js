function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert the string to lowercase
    const alphanumericStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Compare the string with its reverse
    return alphanumericStr === alphanumericStr.split('').reverse().join('');
}

// Test the isPalindrome function
const testString = "A man, a plan, a canal, Panama!";
if (isPalindrome(testString)) {
    console.log(`${testString} is a palindrome.`);
} else {
    console.log(`${testString} is not a palindrome.`);
}
