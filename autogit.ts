function isPalindrome(str: string): boolean {
  return str === str.split('').reverse().join('');
}
function isPalindrome(str: string): boolean {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}
function isPalindrome(str: string): boolean {
  return /^(\w+)\1$/.test(str);
}
const str = 'madam';
console.log(isPalindrome(str)); // true

const str2 = 'hello';
console.log(isPalindrome(str2)); // false
