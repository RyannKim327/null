function isAnagram(str1, str2) {
  const sortedStr1 = str1.toLowerCase().replace(/\s/g, '').split('').sort().join('');
  const sortedStr2 = str2.toLowerCase().replace(/\s/g, '').split('').sort().join('');
  return sortedStr1 === sortedStr2;
}
const string1 = "listen";
const string2 = "silent";
console.log(isAnagram(string1, string2)); // Output: true

const string3 = "hello";
const string4 = "world";
console.log(isAnagram(string3, string4)); // Output: false
