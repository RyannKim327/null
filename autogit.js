function areAnagrams(str1, str2) {
  // Remove spaces and convert to lowercase
  str1 = str1.replace(/\s/g, '').toLowerCase();
  str2 = str2.replace(/\s/g, '').toLowerCase();

  // Convert strings to arrays, sort, and join back
  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');

  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}

// Example usage
const string1 = 'Listen';
const string2 = 'Silent';
const result = areAnagrams(string1, string2);
console.log(result); // Output: true
