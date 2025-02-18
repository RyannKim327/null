function isPalindrome(str: string): boolean {
    // Normalize the string
    const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Get the reversed string
    const reversedStr = normalizedStr.split('').reverse().join('');
    
    // Check if the normalized string is equal to its reverse
    return normalizedStr === reversedStr;
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("Hello, World!")); // false
