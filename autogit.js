function areAnagrams(str1, str2) {
  // Remove non-alphabetic characters and convert to lowercase
  const cleanStr1 = str1.replace(/[^A-Za-z]/g, '').toLowerCase();
  const cleanStr2 = str2.replace(/[^A-Za-z]/g, '').toLowerCase();

  // Sort the strings
  const sortedStr1 = cleanStr1.split('').sort().join('');
  const sortedStr2 = cleanStr2.split('').sort().join('');

  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}

// Example usage:
const string1 = 'Listen';
const string2 = 'Silent';
console.log(areAnagrams(string1, string2)); // Output: true
