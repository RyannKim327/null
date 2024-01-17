function isPalindrome(str) {
  let left = 0; // pointer starting from the left end of the string
  let right = str.length - 1; // pointer starting from the right end of the string

  while (left < right) {
    if (str[left] !== str[right]) {
      return false; // characters at the left and right pointers don't match, it's not a palindrome
    }
    
    left++; // move the left pointer to the right
    right--; // move the right pointer to the left
  }

  return true; // all characters matched, it's a palindrome
}

// Example usage:
console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('hello')); // false
console.log(isPalindrome('level')); // true
console.log(isPalindrome('12321')); // true
