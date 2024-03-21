function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    // Reverse the string
    let reversed = str.split('').reverse().join('');
    
    // Compare the reversed string with the original string
    return str === reversed;
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
