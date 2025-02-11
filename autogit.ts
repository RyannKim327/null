function isPalindrome(str: string): boolean {
    // Normalize the string
    const normalizedStr = str
        .replace(/[^0-9a-zA-Z]/g, '') // Remove non-alphanumeric characters
        .toLowerCase(); // Convert to lowercase

    // Compare with its reverse
    return normalizedStr === normalizedStr.split('').reverse().join('');
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
