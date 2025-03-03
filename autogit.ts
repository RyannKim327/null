function isPalindrome(s: string): boolean {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // Move the left pointer to the right as long as it's not an alphanumeric character
        while (left < right && !isAlphanumeric(s[left])) {
            left++;
        }
        
        // Move the right pointer to the left as long as it's not an alphanumeric character
        while (left < right && !isAlphanumeric(s[right])) {
            right--;
        }
        
        // Compare characters, ignoring case
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false; // Not a palindrome
        }

        left++;
        right--;
    }
    
    return true; // Is a palindrome
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
