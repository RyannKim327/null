function isPalindrome(str) {
    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
        // Ignore non-alphanumeric characters
        while (!isAlphaNumeric(str[i])) i++;
        while (!isAlphaNumeric(str[j])) j--;

        // Convert characters to lowercase for comparison
        let char1 = str[i].toLowerCase();
        let char2 = str[j].toLowerCase();

        // If characters don't match, return false
        if (char1 !== char2) {
            return false;
        }
    }
    return true;
}

function isAlphaNumeric(char) {
    return /[a-zA-Z0-9]/.test(char);
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("race a car")); // Output: false
