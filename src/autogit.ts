function isPalindrome(s: string): boolean {
    let left: number = 0;
    let right: number = s.length - 1;

    while (left < right) {
        // Move the left pointer to the next valid character
        while (left < right && !isValidChar(s[left])) {
            left++;
        }
        // Move the right pointer to the previous valid character
        while (left < right && !isValidChar(s[right])) {
            right--;
        }

        // Compare characters at both pointers
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        // Move both pointers inward
        left++;
        right--;
    }

    return true;
}

// Helper function to determine if the character is alphanumeric
function isValidChar(char: string): boolean {
    const code = char.charCodeAt(0);
    return (code >= 48 && code <= 57) || // 0-9
           (code >= 65 && code <= 90) || // A-Z
           (code >= 97 && code <= 122);   // a-z
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
