function isPalindrome(str) {
  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }

  return true;
}

const str = "madam";
if (isPalindrome(str)) {
  console.log("The string is a palindrome.");
} else {
  console.log("The string is not a palindrome.");
}
