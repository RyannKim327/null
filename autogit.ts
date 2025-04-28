function isPalindrome(s: string): boolean {
    // Initialize two pointers
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // Move the left pointer to the next valid character
        while (left < right && !isValidChar(s[left])) {
            left++;
        }
        // Move the right pointer to the previous valid character
        while (left < right && !isValidChar(s[right])) {
            right--;
        }
        
        // Check if characters at left and right pointers are the same (case insensitive)
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        // Move the pointers closer to the center
        left++;
        right--;
    }

    return true;
}

// Helper function to check if a character is alphanumeric
function isValidChar(c: string): boolean {
    return /^[a-z0-9]$/i.test(c);
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
