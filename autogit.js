let str = "A man, a plan, a canal - Panama!";
let cleanedStr = str.replace(/[^0-9a-z]/gi, "").toLowerCase();
let reversedStr = cleanedStr.split("").reverse().join("");
if (cleanedStr === reversedStr) {
  console.log("It is a palindrome.");
} else {
  console.log("It is not a palindrome.");
}
function isPalindrome(str) {
  let cleanedStr = str.replace(/[^0-9a-z]/gi, "").toLowerCase();
  let reversedStr = cleanedStr.split("").reverse().join("");
  
  return cleanedStr === reversedStr;
}

let str = "A man, a plan, a canal - Panama!";
if (isPalindrome(str)) {
  console.log("It is a palindrome.");
} else {
  console.log("It is not a palindrome.");
}
