function isPalindrome(s: string): boolean {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // Skip non-alphanumeric characters
        while (left < right && !isalnum(s[left])) {
            left++;
        }
        while (left < right && !isalnum(s[right])) {
            right--;
        }

        // Compare characters (case-insensitive)
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

// Helper function to check if a character is alphanumeric
function isalnum(char: string): boolean {
    return /^[a-z0-9]$/i.test(char);
}

// Example usage
const str1 = "A man, a plan, a canal: Panama";
const str2 = "race a car";
console.log(isPalindrome(str1)); // true
console.log(isPalindrome(str2)); // false
