function isPalindrome(str: string): boolean {
    // Normalize the string
    const normalizedStr = str.replace(/\s+/g, '').toLowerCase();
    // Reverse the string
    const reversedStr = normalizedStr.split('').reverse().join('');
    // Compare the normalized string with the reversed string
    return normalizedStr === reversedStr;
}

// Example usage:
console.log(isPalindrome("A man a plan a canal Panama")); // true
console.log(isPalindrome("Hello, World!")); // false
