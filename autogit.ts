function isPalindrome(str: string): boolean {
    // Normalize the string: convert to lowercase and remove non-alphanumeric characters
    const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Reverse the normalized string
    const reversedStr = normalizedStr.split('').reverse().join('');
    
    // Check if the normalized string is the same as the reversed string
    return normalizedStr === reversedStr;
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome("")); // true
console.log(isPalindrome("no 'x' in nixon")); // true
