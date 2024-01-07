function isPalindrome(str) {
  var length = str.length;
  var middle = Math.floor(length / 2);

  for (var i = 0; i < middle; i++) {
    if (str[i] !== str[length - 1 - i]) {
      return false;
    }
  }

  return true;
}
