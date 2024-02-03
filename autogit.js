function isPalindrome(str) {
  let left = 0;                      // left pointer
  let right = str.length - 1;        // right pointer

  while (left < right) {
    if (str[left] !== str[right]) {  // if characters don't match
      return false;                  // not a palindrome
    }
    left++;                          // move left pointer forward
    right--;                         // move right pointer backward
  }

  return true;                       // palindrome
}

// Example usage
console.log(isPalindrome('racecar'));   // true
console.log(isPalindrome('hello'));     // false
console.log(isPalindrome('level'));     // true
console.log(isPalindrome('12321'));     // true
