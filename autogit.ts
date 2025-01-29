function isPalindrome(str: string): boolean {
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
function isPalindrome(str: string): boolean {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}
function isPalindrome(str: string): boolean {
  const regex = ^(a*)\1$;
  return regex.test(str);
}
function isPalindrome(str: string): boolean {
  return [...str].every((c, i, arr) => c === arr[arr.length - i - 1]);
}
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("racecar")); // true
