function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  str = str.replace(/[\W_]/g, '').toLowerCase();

  // Compare with the reverse of the string
  return str === str.split('').reverse().join('');
}

// Testing the function
console.log(isPalindrome('level')); // true
console.log(isPalindrome('hello')); // false
console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome('race car')); // true
