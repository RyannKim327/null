function isPalindrome(str) {
  // Convert the string to lowercase
  str = str.toLowerCase();

  // Initialize two pointers, one at the start and another at the end
  let leftPtr = 0;
  let rightPtr = str.length - 1;

  // While the pointers don't cross each other
  while (leftPtr < rightPtr) {
    // Skip non-alphanumeric characters by moving the pointers
    while (!isAlphanumeric(str[leftPtr]) && leftPtr < rightPtr) {
      leftPtr++;
    }
    while (!isAlphanumeric(str[rightPtr]) && leftPtr < rightPtr) {
      rightPtr--;
    }

    // If the characters at the pointers are not equal, it's not a palindrome
    if (str[leftPtr] !== str[rightPtr]) {
      return false;
    }

    // Move the pointers towards each other
    leftPtr++;
    rightPtr--;
  }

  // If the while loop completes without returning false, it's a palindrome
  return true;
}

// Helper function to check if a character is alphanumeric
function isAlphanumeric(char) {
  const code = char.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) || // Numeric (0-9)
    (code >= 97 && code <= 122) // Lowercase alphabets (a-z)
  );
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(isPalindrome("race a car")); // Output: false
