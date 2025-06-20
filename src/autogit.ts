function isPalindrome(input: string): boolean {
    // Step 1: Normalize the input by removing non-alphanumeric characters and converting to lowercase
    const normalized = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Step 2: Reverse the normalized string
    const reversed = normalized.split('').reverse().join('');

    // Step 3: Compare the normalized string with its reversed version
    return normalized === reversed;
}

// Example Usage:
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("racecar"));                       // Output: true
console.log(isPalindrome("hello"));                         // Output: false
