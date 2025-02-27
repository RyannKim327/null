function isPalindrome(str: string): boolean {
    // Convert the string to lowercase and remove non-alphanumeric characters
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Reverse the cleaned string
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    // Compare the cleaned string with its reversed version
    return cleanedStr === reversedStr;
}

// Example usage:
const testString = "A man, a plan, a canal, Panama";
console.log(isPalindrome(testString)); // Output: true
