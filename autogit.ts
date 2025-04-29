function isPalindrome(s: string): boolean {
    // Normalize the string: convert to lower case and remove non-alphanumeric characters
    const normalizedStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Reverse the normalized string
    const reversedStr = normalizedStr.split('').reverse().join('');
    
    // Check if the normalized string is equal to its reversed version
    return normalizedStr === reversedStr;
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome("")); // true
console.log(isPalindrome("Able was I ere I saw Elba")); // true
