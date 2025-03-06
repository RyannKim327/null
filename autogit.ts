function isPalindrome(s: string): boolean {
    // Normalize the string: remove non-alphanumeric characters and convert to lowercase
    const normalizedString = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    // Reverse the normalized string
    const reversedString = normalizedString.split('').reverse().join('');
    
    // Compare the normalized string with its reversed version
    return normalizedString === reversedString;
}

// Example usage:
const testString = "A man, a plan, a canal: Panama";
console.log(isPalindrome(testString)); // Output: true
