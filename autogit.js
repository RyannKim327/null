function isPalindrome(str) {
  let leftPtr = 0;
  let rightPtr = str.length - 1;

  while (leftPtr < rightPtr) {
    // Ignore non-alphanumeric characters
    while (!isAlphanumeric(str.charAt(leftPtr))) {
      leftPtr++;
    }
    while (!isAlphanumeric(str.charAt(rightPtr))) {
      rightPtr--;
    }

    const leftChar = str.charAt(leftPtr).toLowerCase();
    const rightChar = str.charAt(rightPtr).toLowerCase();

    if (leftChar !== rightChar) {
      return false;
    }

    leftPtr++;
    rightPtr--;
  }

  return true;
}

function isAlphanumeric(char) {
  return /[a-zA-Z0-9]/.test(char);
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("race a car")); // Output: false
