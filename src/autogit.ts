function isPalindrome(input: string): boolean {
    // Step 1: Normalize the string
    const normalized = input
        .toLowerCase() // Convert to lowercase
        .replace(/[^a-z0-9]/g, ''); // Remove non-alphanumeric characters

    // Step 2: Reverse the normalized string
    const reversed = normalized.split('').reverse().join('');

    // Step 3: Compare the original and reversed strings
    return normalized === reversed;
}

// Example Usage
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("")); // true (empty string)
console.log(isPalindrome("a")); // true (single character)
console.log(isPalindrome("Madam")); // true (case insensitive)
console.log(isPalindrome("No 'x' in Nixon")); // true (ignores spaces and punctuation)
console.log(isPalindrome("Hello, World!")); // false
