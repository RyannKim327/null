function isPalindrome(str) {
    // Remove all non-alphanumeric characters and convert to lowercase
    let cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    // Compare the cleaned string with its reverse
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

// Example usage
console.log(isPalindrome("racecar"));  // true
console.log(isPalindrome("hello"));    // false
