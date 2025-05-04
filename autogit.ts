function isPalindrome(str: string): boolean {
    // Normalize the string by removing spaces and converting it to lowercase
    const normalizedStr = str.replace(/\s+/g, '').toLowerCase();
    
    // Reverse the string
    const reversedStr = normalizedStr.split('').reverse().join('');
    
    // Compare the original and reversed strings
    return normalizedStr === reversedStr;
}

// Example usage:
console.log(isPalindrome("A man a plan a canal Panama")); // Output: true
console.log(isPalindrome("Hello")); // Output: false
