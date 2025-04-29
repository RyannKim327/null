function isPalindrome(s: string): boolean {
    // Normalize the string: convert to lowercase and remove non-alphanumeric characters
    const normalizedString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Reverse the string
    const reversedString = normalizedString.split('').reverse().join('');
    
    // Check if the original normalized string is equal to the reversed string
    return normalizedString === reversedString;
}

// Example usage
const testString = "A man, a plan, a canal: Panama";
console.log(isPalindrome(testString)); // Output: true
