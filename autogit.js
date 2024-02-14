function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str.charAt(left) !== str.charAt(right)) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

// Example usage
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
