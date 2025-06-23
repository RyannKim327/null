function isPalindrome(s: string): boolean {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // Skip non-alphanumeric characters from the left
        while (left < right && !isAlphanumeric(s[left])) {
            left++;
        }

        // Skip non-alphanumeric characters from the right
        while (left < right && !isAlphanumeric(s[right])) {
            right--;
        }

        // Compare characters (case-insensitive)
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false; // Not a palindrome
        }

        // Move pointers inward
        left++;
        right--;
    }

    return true; // It's a palindrome
}

// Helper function to check if a character is alphanumeric
function isAlphanumeric(char: string): boolean {
    const code = char.charCodeAt(0);
    return (
        (code >= 48 && code <= 57) || // Digits 0-9
        (code >= 65 && code <= 90) || // Uppercase letters A-Z
        (code >= 97 && code <= 122)   // Lowercase letters a-z
    );
}
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(isPalindrome("race a car"));                     // Output: false
console.log(isPalindrome(" "));                              // Output: true
console.log(isPalindrome(".,"));                             // Output: true
