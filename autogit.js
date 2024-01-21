function isPalindrome(str) {
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("racecar"));  // true
console.log(isPalindrome("hello"));    // false
console.log(isPalindrome("madam"));    // true
function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome("racecar"));  // true
console.log(isPalindrome("hello"));    // false
console.log(isPalindrome("madam"));    // true
function isPalindrome(str) {
  if (str.length === 0 || str.length === 1) {
    return true;
  }
  
  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, str.length - 1));
  }
  
  return false;
}

console.log(isPalindrome("racecar"));  // true
console.log(isPalindrome("hello"));    // false
console.log(isPalindrome("madam"));    // true
