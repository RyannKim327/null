function isPalindrome(s: string): boolean {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // Move the left pointer to the next valid character
        while (left < right && !isValidCharacter(s[left])) {
            left++;
        }
        // Move the right pointer to the previous valid character
        while (left < right && !isValidCharacter(s[right])) {
            right--;
        }
        
        // Check if the characters are equal (case insensitive)
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }
        
        // Move towards the center
        left++;
        right--;
    }
    
    return true;
}

function isValidCharacter(c: string): boolean {
    // Check if the character is alphanumeric
    return /^[a-zA-Z0-9]$/.test(c);
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
