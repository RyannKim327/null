function isPalindrome(s: string): boolean {
    // Normalize the string: remove non-alphanumeric characters and convert to lower case
    const normalizedString = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    let left = 0;
    let right = normalizedString.length - 1;

    while (left < right) {
        if (normalizedString[left] !== normalizedString[right]) {
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
