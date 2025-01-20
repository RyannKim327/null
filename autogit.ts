function areAnagrams(str1: string, str2: string): boolean {
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}
console.log(areAnagrams('listen', 'silent')); // true
console.log(areAnagrams('hello', 'world')); // false
function areAnagrams(str1: string, str2: string): boolean {
  return str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('');
}
