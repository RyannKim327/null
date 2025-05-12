function isPalindrome(str: string): boolean {
    // Normalize the string: remove non-alphanumeric characters and make it lowercase
    const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Reverse the normalized string
    const reversedStr = normalizedStr.split('').reverse().join('');
    
    // Check if the normalized string is equal to its reverse
    return normalizedStr === reversedStr;
}
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("Hello")); // false
