function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert the string to lowercase
    const formattedStr = str.replace(/[\W_]/g, '').toLowerCase();
    
    // Reverse the string
    const reversedStr = formattedStr.split('').reverse().join('');
    
    // Compare the original string with the reversed string
    return formattedStr === reversedStr;
}

// Test the function
const str1 = "A man, a plan, a canal, Panama!";
console.log(isPalindrome(str1)); // Output: true

const str2 = "hello world";
console.log(isPalindrome(str2)); // Output: false
