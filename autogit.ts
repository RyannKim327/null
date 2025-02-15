function isPalindrome(s: string): boolean {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // Move the left pointer until we find a valid character
        while (left < right && !isAlphanumeric(s[left])) {
            left++;
        }
        // Move the right pointer until we find a valid character
        while (left < right && !isAlphanumeric(s[right])) {
            right--;
        }
        // Compare characters at the left and right pointers (case-insensitive)
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

function isAlphanumeric(char: string): boolean {
    const code = char.charCodeAt(0);
    return (
        (code >= 48 && code <= 57) || // 0-9
        (code >= 65 && code <= 90) || // A-Z
        (code >= 97 && code <= 122)   // a-z
    );
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
