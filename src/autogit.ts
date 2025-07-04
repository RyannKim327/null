function isPalindrome(str: string): boolean {
    // Clean the string: remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    
    // Get the reversed string
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    // Compare the cleaned string with its reverse
    return cleanedStr === reversedStr;
}

// Example usage
const testString = "A man, a plan, a canal: Panama";
console.log(isPalindrome(testString)); // Output: true
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
console.log(isPalindrome("Was it a car or a cat I saw?")); // Output: true
console.log(isPalindrome("No 'x' in Nixon")); // Output: true
