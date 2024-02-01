function isAnagram(str1, str2) {
  // Convert strings to lowercase and remove non-alphabetic characters
  const cleanStr1 = str1.toLowerCase().replace(/[^a-z]+/g, '');
  const cleanStr2 = str2.toLowerCase().replace(/[^a-z]+/g, '');

  // Sort the characters in both strings
  const sortedStr1 = cleanStr1.split('').sort().join('');
  const sortedStr2 = cleanStr2.split('').sort().join('');

  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}

// Testing the function
console.log(isAnagram('listen', 'silent'));     // true
console.log(isAnagram('rail safety', 'fairy tales'));     // true
console.log(isAnagram('hello', 'goodbye'));     // false
console.log(isAnagram('silent', 'lentils'));     // false
