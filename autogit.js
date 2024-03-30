function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Reverse the string
    let reversedStr = str.split('').reverse().join('');
    
    // Check if the original and reversed strings are equal
    return str === reversedStr;
}

// Test the function
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
