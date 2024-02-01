function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    var alphanumericRegex = /[a-z0-9]/gi;
    var cleanedStr = str.toLowerCase().match(alphanumericRegex).join('');

    // Compare the cleaned string with its reversed version
    var reversedStr = cleanedStr.split('').reverse().join('');

    return cleanedStr === reversedStr;
}

// Example usage:
var string1 = "A man, a plan, a canal - Panama!";
console.log(isPalindrome(string1)); // Output: true

var string2 = "Hello, world!";
console.log(isPalindrome(string2)); // Output: false
