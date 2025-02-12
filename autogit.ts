function isPalindrome(str: string): boolean {
    // Normalize the string: remove non-alphanumeric characters and convert to lowercase
    const normalizedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    
    // Reverse the normalized string
    const reversedStr = normalizedStr.split('').reverse().join('');
    
    // Check if the original normalized string is equal to the reversed string
    return normalizedStr === reversedStr;
}

// Example usage
const testString = "A man, a plan, a canal, Panama";
console.log(isPalindrome(testString)); // Output: true
