function isPalindrome(input: string): boolean {
    // Normalize the input by converting to lowercase and filtering out non-alphanumeric characters
    const normalizedStr = input
        .toLowerCase()
        .replace(/[^a-z0-9]/g, ''); // Remove non-alphanumeric characters
    
    // Check if the normalized string is equal to its reverse
    const reversedStr = normalizedStr.split('').reverse().join('');
    
    return normalizedStr === reversedStr;
}

// Example usage:
const testString1 = "A man, a plan, a canal, Panama";
console.log(isPalindrome(testString1)); // Output: true

const testString2 = "Hello, World!";
console.log(isPalindrome(testString2)); // Output: false
