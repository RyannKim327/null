function isPalindrome(s: string): boolean {
    // Normalize the string: Remove non-alphanumeric characters and convert to lowercase
    // This step is necessary only if you want to ignore spaces and punctuation
    s = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
    
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return false; // Not a palindrome if characters don't match
        }

        left++;  // Move the left pointer to the right
        right--; // Move the right pointer to the left
    }

    return true; // All characters matched, it's a palindrome
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
