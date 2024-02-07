function isAnagram(str1, str2) {
  // Convert the strings to lowercase
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // Remove non-alphabetic characters and spaces
  str1 = str1.replace(/[^a-z]/g, '');
  str2 = str2.replace(/[^a-z]/g, '');

  // Convert strings to arrays, sort, and join
  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');

  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}

// Usage example
console.log(isAnagram('listen', 'silent'));  // true
console.log(isAnagram('hello', 'world'));    // false
