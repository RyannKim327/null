function isPalindrome(str) {
  // remove non-alphanumeric characters and convert to lowercase
  str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // reverse the string
  var reversedStr = str.split('').reverse().join('');

  // compare the reversed string with the original string
  return str === reversedStr;
}

// example usage
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("hello world")); // false
