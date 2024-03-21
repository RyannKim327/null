function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    // Compare the string with its reverse
    return str === str.split("").reverse().join("");
}

// Test the function
const str1 = "A man, a plan, a canal, Panama";
console.log(isPalindrome(str1)); // Output: true

const str2 = "Hello, world!";
console.log(isPalindrome(str2)); // Output: false
