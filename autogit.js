let str = "A man, a plan, a canal, Panama!";
str = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
let reversedStr = str.split("").reverse().join("");
if (str === reversedStr) {
    console.log("The string is a palindrome.");
} else {
    console.log("The string is not a palindrome.");
}
function isPalindrome(str) {
  str = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

let string1 = "A man, a plan, a canal, Panama!";
console.log(isPalindrome(string1)); // Output: true

let string2 = "hello world";
console.log(isPalindrome(string2)); // Output: false

let string3 = "racecar";
console.log(isPalindrome(string3)); // Output: true
