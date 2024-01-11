function isPalindrome(str) {
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

// Usage:
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false
function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

// Usage:
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false
function isPalindrome(str) {
  return str.split("").every((char, index) => {
    return char === str[str.length - 1 - index];
  });
}

// Usage:
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false
