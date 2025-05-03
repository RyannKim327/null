function isPalindrome(s: string): boolean {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleaned = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Use two pointers to compare characters
    let left = 0;
    let right = cleaned.length - 1;

    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false; // Not a palindrome
        }
        left++;
        right--;
    }

    return true; // Is a palindrome
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
