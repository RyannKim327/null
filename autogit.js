function isPalindrome(str) {
  // convert the string to lowercase and remove non-alphanumeric characters
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  let left = 0; // pointer starting from the leftmost character
  let right = str.length - 1; // pointer starting from the rightmost character
  
  while (left < right) {
    if (str[left] !== str[right]) {
      return false; // characters don't match, it's not a palindrome
    }
    
    left++; // move the left pointer to the right
    right--; // move the right pointer to the left
  }
  
  return true; // all characters matched, it's a palindrome
}

// Testing the function
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome("level")); // true
