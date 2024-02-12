let str = "A man, a plan, a canal: Panama";
str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
let reversedStr = str.split('').reverse().join('');
if (str === reversedStr) {
    console.log("The string is a palindrome.");
} else {
    console.log("The string is not a palindrome.");
}
function isPalindrome(str) {
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

let inputString = "A man, a plan, a canal: Panama";
if (isPalindrome(inputString)) {
    console.log("The string is a palindrome.");
} else {
    console.log("The string is not a palindrome.");
}
