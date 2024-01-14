function isValidPalindrome(string) {
  // Convert the string to lowercase
  string = string.toLowerCase();

  // Define two pointers, one starting from the beginning and one starting from the end
  let left = 0;
  let right = string.length - 1;

  while (left < right) {
    // Skip non-alphanumeric characters from the left pointer
    if (!isAlphanumeric(string[left])) {
      left++;
      continue;
    }

    // Skip non-alphanumeric characters from the right pointer
    if (!isAlphanumeric(string[right])) {
      right--;
      continue;
    }

    // If the characters at the left and right pointers are not equal, it's not a palindrome
    if (string[left] !== string[right]) {
      return false;
    }

    // Move the pointers towards the center
    left++;
    right--;
  }

  // If we've reached this point, it's a valid palindrome
  return true;
}

function isAlphanumeric(char) {
  // Match alphanumeric characters using a regular expression
  return /[a-z0-9]/i.test(char);
}

// Test cases
console.log(isValidPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isValidPalindrome("race a car")); // false
console.log(isValidPalindrome("level")); // true
console.log(isValidPalindrome("123  !@#")); // true
