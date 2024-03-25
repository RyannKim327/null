function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert the string to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Reverse the cleaned string
    const reversedStr = cleanedStr.split('').reverse().join('');

    // Check if the original string is equal to the reversed string
    return cleanedStr === reversedStr;
}

// Test the function
const str1 = "A man, a plan, a canal, Panama";
console.log(isPalindrome(str1)); // Output: true

const str2 = "racecar";
console.log(isPalindrome(str2)); // Output: true

const str3 = "hello";
console.log(isPalindrome(str3)); // Output: false
