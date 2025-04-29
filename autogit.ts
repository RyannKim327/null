function isPalindrome(str: string): boolean {
    // Normalize the string: convert to lowercase and remove non-alphanumeric characters
    const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
    
    // Reverse the normalized string
    const reversedStr = normalizedStr.split('').reverse().join('');

    // Compare the normalized string with its reverse
    return normalizedStr === reversedStr;
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
