function isPalindrome(str: string): boolean {
    // Normalize the string: remove non-alphanumeric characters and convert to lowercase
    const normalizedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    
    // Get the reversed string
    const reversedStr = normalizedStr.split('').reverse().join('');
    
    // Check if the normalized string is equal to its reverse
    return normalizedStr === reversedStr;
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
