str1 = str1.replace(/[^\w]/g, '').toLowerCase();
str2 = str2.replace(/[^\w]/g, '').toLowerCase();
str1 = str1.split('').sort().join('');
str2 = str2.split('').sort().join('');
return str1 === str2;
function areAnagrams(str1, str2) {
  str1 = str1.replace(/[^\w]/g, '').toLowerCase();
  str2 = str2.replace(/[^\w]/g, '').toLowerCase();

  str1 = str1.split('').sort().join('');
  str2 = str2.split('').sort().join('');

  return str1 === str2;
}
console.log(areAnagrams("listen", "silent")); // Output: true
console.log(areAnagrams("hello", "world")); // Output: false
