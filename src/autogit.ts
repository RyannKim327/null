function isPalindrome(s: string): boolean {
    // Step 1: Normalize the string
    const normalized = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Step 2: Reverse the normalized string
    const reversed = normalized.split('').reverse().join('');

    // Step 3: Compare the normalized string with its reversed version
    return normalized === reversed;
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome(" ")); // true
function isPalindrome(s: string): boolean {
    const normalized = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
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

// Example usage:
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome(" ")); // true
