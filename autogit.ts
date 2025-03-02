function isPalindrome(str: string): boolean {
    // Normalize the string: remove non-alphanumeric characters and convert to lowercase
    const normalizedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    
    // Reverse the normalized string
    const reversedStr = normalizedStr.split('').reverse().join('');
    
    // Compare the normalized string with the reversed string
    return normalizedStr === reversedStr;
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("Hello, World!")); // false
