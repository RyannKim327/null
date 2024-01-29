function areAnagrams(str1, str2) {
  // Convert both strings to lowercase and remove non-alphanumeric characters
  const cleanStr1 = str1.toLowerCase().replace(/[^a-z0-9]/g, '');
  const cleanStr2 = str2.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Sort the characters of both strings
  const sortedStr1 = cleanStr1.split('').sort().join('');
  const sortedStr2 = cleanStr2.split('').sort().join('');

  // Compare the sorted strings for equality
  return sortedStr1 === sortedStr2;
}

// Example usage:
console.log(areAnagrams('listen', 'silent'));  // true
console.log(areAnagrams('Eleven plus two', 'Twelve plus one'));  // true
console.log(areAnagrams('hello', 'world'));  // false
