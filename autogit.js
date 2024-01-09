function isPalindrome(str) {
  // remove non-alphanumeric characters and convert to lowercase
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // check if the string is the same when reversed
  return str === str.split('').reverse().join('');
}

// example usage
console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('hello')); // false
