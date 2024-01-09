function isAnagram(str1, str2) {
  str1 = str1.toLowerCase().replace(/[^a-z0-9]/g, '');
  str2 = str2.toLowerCase().replace(/[^a-z0-9]/g, '');

  const arr1 = str1.split('').sort();
  const arr2 = str2.split('').sort();

  return arr1.join('') === arr2.join('');
}

// Testing the function
console.log(isAnagram('listen', 'silent'));  // true
console.log(isAnagram('hello', 'world'));    // false
