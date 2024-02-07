function areAnagrams(str1, str2) {
  // Convert both strings to lowercase and remove non-alphanumeric characters
  str1 = str1.toLowerCase().replace(/[^a-z0-9]/g, '');
  str2 = str2.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Sort the strings
  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');

  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}

// Example usage
console.log(areAnagrams('Listen', 'Silent')); // true
console.log(areAnagrams('hello', 'bye')); // false
