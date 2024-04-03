function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    let cleanedStr = str.toLowerCase().replace(/[\W_]/g, '');
    
    // Reverse the string
    let reversedStr = cleanedStr.split('').reverse().join('');
    
    // Check if the original and reversed strings are the same
    return cleanedStr === reversedStr;
}

// Test the function
let str = "A man, a plan, a canal, Panama";
console.log(isPalindrome(str)); // Output: true
