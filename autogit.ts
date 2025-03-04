function isPalindrome(input: string): boolean {
    // Normalize the string
    const normalizedString = input
        .replace(/[^a-zA-Z0-9]/g, '') // Remove non-alphanumeric characters
        .toLowerCase(); // Convert to lower case

    // Get the reverse of the normalized string
    const reversedString = normalizedString.split('').reverse().join('');

    // Check if the normalized string is equal to its reverse
    return normalizedString === reversedString;
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("No 'x' in Nixon")); // true
console.log(isPalindrome("Hello, world!")); // false
