function isPalindrome(input: string): boolean {
    // Step 1: Normalize the string
    const normalized = input
        .toLowerCase() // Convert to lowercase
        .replace(/[^a-z0-9]/g, ''); // Remove non-alphanumeric characters

    // Step 2: Compare the string with its reverse
    const reversed = normalized.split('').reverse().join('');
    return normalized === reversed;
}

// Example usage:
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("hello")); // false
function isPalindromeOptimized(input: string): boolean {
    // Normalize the string
    const normalized = input
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '');

    // Two-pointer approach
    let left = 0;
    let right = normalized.length - 1;

    while (left < right) {
        if (normalized[left] !== normalized[right]) {
            return false; // Characters don't match
        }
        left++;
        right--;
    }

    return true; // All characters matched
}

// Example usage:
console.log(isPalindromeOptimized("racecar")); // true
console.log(isPalindromeOptimized("A man, a plan, a canal: Panama")); // true
console.log(isPalindromeOptimized("hello")); // false
