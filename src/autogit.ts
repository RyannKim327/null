function isPalindrome(s: string): boolean {
    // Step 1: Normalize the string
    const normalized = s
        .toLowerCase() // Convert to lowercase
        .replace(/[^a-z0-9]/g, ''); // Remove non-alphanumeric characters

    // Step 2: Reverse the normalized string
    const reversed = normalized.split('').reverse().join('');

    // Step 3: Compare the original and reversed strings
    return normalized === reversed;
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome(" ")); // true (empty or single-character strings are palindromes)
function isPalindrome(s: string): boolean {
    const normalized = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0;
    let right = normalized.length - 1;

    while (left < right) {
        if (normalized[left] !== normalized[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}
