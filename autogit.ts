function isPalindrome(s: string): boolean {
    // Normalize the string: remove non-alphanumeric chars and convert to lowercase
    const normalized = s.replace(/[^a-z0-9]/gi, '').toLowerCase();

    // Check if the normalized string is the same when reversed
    const reversed = normalized.split('').reverse().join('');
    return normalized === reversed;
}

// Example tests
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
