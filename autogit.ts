function isPalindrome(s: string): boolean {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // Move the left pointer to the right as long as the character is not alphanumeric
        while (left < right && !isAlphanumeric(s[left])) {
            left++;
        }
        // Move the right pointer to the left as long as the character is not alphanumeric
        while (left < right && !isAlphanumeric(s[right])) {
            right--;
        }
        // Compare characters (case insensitive)
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
    // Check if the character is a number (0-9) or a letter (a-z, A-Z)
    return (code >= 48 && code <= 57) || // 0-9
           (code >= 65 && code <= 90) || // A-Z
           (code >= 97 && code <= 122);   // a-z
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
