function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  str = str.replace(/[^a-z0-9]/gi, '').toLowerCase();

  // Compare characters from the beginning and end
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

// Example usage:
console.log(isPalindrome('level'));  // true
console.log(isPalindrome('hello'));  // false
console.log(isPalindrome('Step on no pets')); // true
console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
