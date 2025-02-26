function isPalindrome(str: string): boolean {
    // Normalize the string: lowercase and remove non-alphanumeric characters
    const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Create a reversed version of the normalized string
    const reversedStr = normalizedStr.split('').reverse().join('');

    // Compare the normalized string with the reversed string
    return normalizedStr === reversedStr;
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
