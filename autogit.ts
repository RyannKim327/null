function isPalindrome(s: string): boolean {
    // Convert the string to lower case and filter non-alphanumeric characters
    // We avoid using additional space for a filtered string by simply skipping characters
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // Move left pointer to the right if the character is not alphanumeric
        while (left < right && !isAlphanumeric(s[left])) {
            left++;
        }
        // Move right pointer to the left if the character is not alphanumeric
        while (left < right && !isAlphanumeric(s[right])) {
            right--;
        }

        // Compare characters (case insensitive)
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        // Move both pointers towards the center
        left++;
        right--;
    }

    return true;
}

// Helper function to check if a character is alphanumeric
function isAlphanumeric(char: string): boolean {
    return /^[0-9a-zA-Z]*$/.test(char); // Regular expression to check alphanumeric
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Should return true
console.log(isPalindrome("race a car")); // Should return false
