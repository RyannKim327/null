function isPalindrome(str: string): boolean {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // Reverse the cleaned string
    const reversedStr = cleanedStr.split('').reverse().join('');
    // Compare cleaned string with its reversed version
    return cleanedStr === reversedStr;
}

// Example usage
const testString = "A man, a plan, a canal, Panama";
console.log(isPalindrome(testString)); // Output: true
