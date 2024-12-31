function isPalindrome(str) {
    // Removing non-alphanumeric characters and converting to lowercase
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Comparing characters from both ends
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    
    return true;
}

// Test the function
const inputString = "A man, a plan, a canal, Panama";
if (isPalindrome(inputString)) {
    console.log(`${inputString} is a palindrome.`);
} else {
    console.log(`${inputString} is not a palindrome.`);
}
