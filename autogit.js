function isAnagram(str1, str2) {
  // Remove any non-alphanumeric characters and convert to lowercase
  const cleanStr1 = str1.replace(/[^\w]/g, '').toLowerCase();
  const cleanStr2 = str2.replace(/[^\w]/g, '').toLowerCase();

  // Sort the characters in the strings
  const sortedStr1 = cleanStr1.split('').sort().join('');
  const sortedStr2 = cleanStr2.split('').sort().join('');

  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}

// Example usage
console.log(isAnagram('Listen', 'Silent'));          // true
console.log(isAnagram('rail safety', 'fairy tales')); // true
console.log(isAnagram('hello', 'hola'));             // false
