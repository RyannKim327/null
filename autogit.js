function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert the string to lowercase
  str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

// Test the function
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("race a car")); // Output: false
