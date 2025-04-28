function isPalindrome(input: string): boolean {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedInput = input.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    // Reverse the cleaned string
    const reversedInput = cleanedInput.split('').reverse().join('');
    // Check if the cleaned string is equal to its reverse
    return cleanedInput === reversedInput;
}

// Example usage:
const testString = "A man, a plan, a canal: Panama";
console.log(isPalindrome(testString)); // Output: true
