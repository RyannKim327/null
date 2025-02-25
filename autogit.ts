function isPalindrome(s: string): boolean {
    // Remove non-alphanumeric characters and convert to lower case
    let cleaned = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    let left = 0;
    let right = cleaned.length - 1;

    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false; // Not a palindrome
        }
        left++;
        right--;
    }

    return true; // It is a palindrome
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
