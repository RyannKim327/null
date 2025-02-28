function isPalindrome(str: string): boolean {
    // Normalize the string
    const normalizedStr = str.replace(/\s+/g, '').toLowerCase();
    
    // Get the reversed string
    const reversedStr = normalizedStr.split('').reverse().join('');
    
    // Check if the normalized string is the same as its reversed version
    return normalizedStr === reversedStr;
}

// Example usage:
console.log(isPalindrome("A man a plan a canal Panama")); // true
console.log(isPalindrome("Hello")); // false
