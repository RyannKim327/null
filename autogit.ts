function isPalindrome(s: string): boolean {
    // Normalize the string: remove non-alphanumeric characters and convert to lowercase
    const normalizedString = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    
    // Get the reversed string
    const reversedString = normalizedString.split('').reverse().join('');
    
    // Check if the normalized string is equal to its reverse
    return normalizedString === reversedString;
}

// Example usage:
const testString1 = "A man, a plan, a canal: Panama";
const testString2 = "not a palindrome";

console.log(isPalindrome(testString1)); // Output: true
console.log(isPalindrome(testString2)); // Output: false
