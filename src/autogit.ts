function isPalindrome(input: string): boolean {
    // Step 1: Normalize the string
    const normalized = input
        .toLowerCase() // Convert to lowercase
        .replace(/[^a-z0-9]/g, ''); // Keep only alphanumeric characters

    // Step 2: Reverse the normalized string
    const reversed = normalized.split('').reverse().join('');

    // Step 3: Compare the normalized string with its reversed version
    return normalized === reversed;
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
function isPalindrome(input: string): boolean {
    const normalized = input.toLowerCase().replace(/[^a-z0-9]/g, '');
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
