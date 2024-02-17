function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Reverse the string
    let reversed = str.split('').reverse().join('');

    // Check if the original string is equal to the reversed string
    return str === reversed;
}

// Test the function
let testString = "A man, a plan, a canal, Panama!";
console.log(isPalindrome(testString)); // Output: true
