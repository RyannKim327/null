function isPalindrome(str) {
    // Define two pointers, one at the beginning and one at the end of the string
    let start = 0;
    let end = str.length - 1;
    
    // Loop until the two pointers meet
    while (start < end) {
        // Ignore non-alphanumeric characters and move the pointers
        while (!isAlphanumeric(str[start])) {
            start++;
        }
        while (!isAlphanumeric(str[end])) {
            end--;
        }
        
        // If the characters at the two pointers are not equal, the string is not a palindrome
        if (str[start].toLowerCase() !== str[end].toLowerCase()) {
            return false;
        }
        
        // Move the pointers
        start++;
        end--;
    }
    
    // If the loop completes without returning false, the string is a palindrome
    return true;
}

// Helper function to check if a character is alphanumeric
function isAlphanumeric(char) {
    return /[a-zA-Z0-9]/.test(char);
}

// Test the function
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(isPalindrome("race a car")); // Output: false
