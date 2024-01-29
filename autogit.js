function isPalindrome(str) {
    // Remove all non-alphanumeric characters and convert to lowercase
    var cleanedString = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    // Reverse the cleaned string
    var reversedString = cleanedString.split('').reverse().join('');

    // Compare the cleaned string with the reversed string
    return cleanedString === reversedString;
}

// Test the function
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race car")); // true
console.log(isPalindrome("hello world")); // false
