function isPalindrome(str: string): boolean {
    // Convert the string to lowercase and remove non-alphanumeric characters
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
    // Reverse the cleaned string
    const reversedStr = cleanedStr.split('').reverse().join('');
    // Compare the cleaned string with the reversed string
    return cleanedStr === reversedStr;
}

// Example usage
const result = isPalindrome("A man, a plan, a canal: Panama");
console.log(result); // Output: true
