const cleanString = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
const reversedString = cleanString.split("").reverse().join("");
let reversedString = "";
for (let i = cleanString.length - 1; i >= 0; i--) {
  reversedString += cleanString.charAt(i);
}
const isPalindrome = cleanString === reversedString;
function isPalindrome(str) {
  const cleanString = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversedString = cleanString.split("").reverse().join("");
  return cleanString === reversedString;
}
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
