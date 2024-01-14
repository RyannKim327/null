function isPalindrome(str) {
  // Set the left and right pointers
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    // Ignore non-alphanumeric characters and move the pointers
    while (!isAlphanumeric(str[left])) {
      left++;
    }
    while (!isAlphanumeric(str[right])) {
      right--;
    }

    // If the characters don't match, it's not a palindrome
    if (str[left].toLowerCase() !== str[right].toLowerCase()) {
      return false;
    }

    // Move the pointers
    left++;
    right--;
  }

  // If all characters matched, it's a palindrome
  return true;
}

function isAlphanumeric(char) {
  // Helper function to check if a character is alphanumeric
  return /^[a-zA-Z0-9]+$/.test(char);
}
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome("No lemon, no melon")); // true
