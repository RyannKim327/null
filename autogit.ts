function isPalindrome(s: string): boolean {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // Move left pointer to the right if not an alphanumeric character
        while (left < right && !isAlphanumeric(s[left])) {
            left++;
        }
        // Move right pointer to the left if not an alphanumeric character
        while (left < right && !isAlphanumeric(s[right])) {
            right--;
        }
        // Compare characters at left and right pointers
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false; // Not a palindrome
        }
        left++;
        right--;
    }

    return true; // It's a palindrome
}

// Helper function to check if a character is alphanumeric
function isAlphanumeric(c: string): boolean {
    const code = c.charCodeAt(0);
    return (
        // A-Z (65-90) or a-z (97-122) or 0-9 (48-57)
        (code >= 65 && code <= 90) || 
        (code >= 97 && code <= 122) || 
        (code >= 48 && code <= 57)
    );
}

// Example usage:
const input = "A man, a plan, a canal: Panama";
console.log(isPalindrome(input)); // Output: true
