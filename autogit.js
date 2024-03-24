function isPalindrome(str) {
    // Remove special characters, spaces, and convert to lowercase
    let cleanStr = str.toLowerCase().replace(/[\W_]/g, '');

    // Reverse the string
    let reversedStr = cleanStr.split('').reverse().join('');

    // Check if the original string is equal to the reversed string
    return cleanStr === reversedStr;
}

// Test the function
console.log(isPalindrome("Racecar")); // Output: true
console.log(isPalindrome("Hello")); // Output: false
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
