function isPalindrome(str: string): boolean {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  // Compare the string with its reverse
  return cleanedStr === cleanedStr.split('').reverse().join('');
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome("hello")); // false
function isPalindrome(str: string): boolean {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  let left = 0;
  let right = cleanedStr.length - 1;
  
  while (left < right) {
    if (cleanedStr[left] !== cleanedStr[right]) {
      return false;
    }
    left++;
    right--;
  }
  
  return true;
}
console.log(isPalindrome("")); // true (empty string)
console.log(isPalindrome("1")); // true (single character)
console.log(isPalindrome("A")); // true
console.log(isPalindrome("Was it a car or a cat I saw?")); // true
