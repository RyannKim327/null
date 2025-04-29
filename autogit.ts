function isPalindrome(input: string): boolean {
    // Normalize the input by removing spaces and converting to lower case
    const normalizedInput = input.replace(/\s+/g, '').toLowerCase();
    // Reverse the normalized input
    const reversedInput = normalizedInput.split('').reverse().join('');
    // Compare the normalized input with its reversed version
    return normalizedInput === reversedInput;
}

// Example usage:
console.log(isPalindrome("A man a plan a canal Panama")); // true
console.log(isPalindrome("Hello")); // false
console.log(isPalindrome("Able was I saw Elba")); // true
