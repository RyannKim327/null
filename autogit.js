function isPalindrome(str) {
  // Convert the string to lowercase and remove non-alphanumeric characters
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Initialize two pointers, one pointing to the start of the string and the other to the end
  let i = 0;
  let j = str.length - 1;

  // Move the pointers towards the center, comparing characters
  while (i < j) {
    if (str[i] !== str[j]) {
      return false; // If characters don't match, it's not a palindrome
    }
    i++;
    j--;
  }

  return true; // All characters matched, it's a palindrome
}
console.log(isPalindrome("racecar"));      // true
console.log(isPalindrome("A man, a plan, a canal: Panama"));  // true
console.log(isPalindrome("hello"));        // false
