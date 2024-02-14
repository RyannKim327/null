function isAnagram(str1, str2) {
  str1 = str1.toLowerCase().replace(/\s/g, '');
  str2 = str2.toLowerCase().replace(/\s/g, '');
}
function isAnagram(str1, str2) {
  str1 = str1.toLowerCase().replace(/\s/g, '');
  str2 = str2.toLowerCase().replace(/\s/g, '');

  if (str1.length !== str2.length) {
    return false;
  }
}
function isAnagram(str1, str2) {
  str1 = str1.toLowerCase().replace(/\s/g, '');
  str2 = str2.toLowerCase().replace(/\s/g, '');

  if (str1.length !== str2.length) {
    return false;
  }

  var arr1 = str1.split('');
  var arr2 = str2.split('');
}
function isAnagram(str1, str2) {
  str1 = str1.toLowerCase().replace(/\s/g, '');
  str2 = str2.toLowerCase().replace(/\s/g, '');

  if (str1.length !== str2.length) {
    return false;
  }

  var arr1 = str1.split('').sort();
  var arr2 = str2.split('').sort();
}
function isAnagram(str1, str2) {
  str1 = str1.toLowerCase().replace(/\s/g, '');
  str2 = str2.toLowerCase().replace(/\s/g, '');

  if (str1.length !== str2.length) {
    return false;
  }

  var arr1 = str1.split('').sort().join('');
  var arr2 = str2.split('').sort().join('');

  return arr1 === arr2;
}
console.log(isAnagram('listen', 'silent')); // Output: true
console.log(isAnagram('hello', 'world')); // Output: false
