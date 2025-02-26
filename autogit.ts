function isPalindrome(str: string): boolean {
    // Normalize the string: remove non-alphanumeric characters and convert to lowercase
    const normalizedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    
    // Get the reverse of the normalized string
    const reversedStr = normalizedStr.split('').reverse().join('');
    
    // Check if the normalized string is equal to its reversed version
    return normalizedStr === reversedStr;
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(isPalindrome("race a car")); // Output: false
