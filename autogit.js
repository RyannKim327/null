function isPalindrome(str) {
    // Remove special characters and convert the string to lowercase
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Reverse the string
    let reversedStr = str.split('').reverse().join('');

    // Check if the original string is equal to the reversed string
    return str === reversedStr;
}
let inputString = "A man, a plan, a canal, Panama!";
if (isPalindrome(inputString)) {
    console.log(inputString + " is a palindrome!");
} else {
    console.log(inputString + " is not a palindrome.");
}
