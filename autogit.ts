function isPalindrome(str: string): boolean {
    // Normalize the string: remove non-alphanumeric characters and convert to lowercase
    const normalizedStr = str.replace(/[\W_]/g, '').toLowerCase();
    
    // Create the reversed version of the normalized string
    const reversedStr = normalizedStr.split('').reverse().join('');
    
    // Compare normalized string with its reversed version
    return normalizedStr === reversedStr;
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome("")); // true (an empty string is a palindrome)
