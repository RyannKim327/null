function isPalindrome(str: string): boolean {
    // Normalize the string by converting it to lowercase and removing non-alphanumeric characters
    const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
    
    // Reverse the normalized string
    const reversedStr = normalizedStr.split('').reverse().join('');
    
    // Compare the normalized string with its reversed version
    return normalizedStr === reversedStr;
}

// Test the function
const testString = "A man, a plan, a canal: Panama";
console.log(`${testString} is palindrome: ${isPalindrome(testString)}`);

const anotherTestString = "hello";
console.log(`${anotherTestString} is palindrome: ${isPalindrome(anotherTestString)}`);
