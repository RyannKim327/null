function isPalindrome(str: string): boolean {
  return str === str.split('').reverse().join('');
}
console.log(isPalindrome('madam')); // true
console.log(isPalindrome('hello')); // false
const isPalindrome = (str: string) => str === [...str].reverse().join('');
