function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert the string to lowercase
    let cleanStr = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
    
    // Reverse the cleaned string
    let reversedStr = cleanStr.split('').reverse().join('');
    
    // Compare the cleaned string with its reverse
    return cleanStr === reversedStr;
}

// Test the function
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("Hello World")); // false
