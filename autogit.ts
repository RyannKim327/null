function isPalindrome(str: string): boolean {
    // Normalize the string: remove non-alphanumeric characters and convert to lowercase
    const normalizedStr = str
        .replace(/[^0-9a-z]/gi, '')  // Remove non-alphanumeric characters
        .toLowerCase();              // Convert to lowercase

    // Reverse the normalized string
    const reversedStr = normalizedStr.split('').reverse().join('');

    // Check if the normalized string is equal to its reversed version
    return normalizedStr === reversedStr;
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("Not a palindrome"));                // false
console.log(isPalindrome("12321"));                           // true
console.log(isPalindrome("12345"));                           // false
