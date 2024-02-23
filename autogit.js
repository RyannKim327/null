function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert the string to lowercase
    str = str.replace(/[\W_]/g, '').toLowerCase();

    // Compare the string with its reverse
    return str === str.split('').reverse().join('');
}

// Test the function
console.log(isPalindrome('racecar')); // Output: true
console.log(isPalindrome('hello')); // Output: false
