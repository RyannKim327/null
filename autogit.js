function areAnagrams(str1, str2) {
  // Convert the strings to lowercase and remove whitespace
  str1 = str1.toLowerCase().replace(/\s/g, '');
  str2 = str2.toLowerCase().replace(/\s/g, '');
  
  // Sort the strings
  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');
  
  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}

// Test the function
const string1 = 'listen';
const string2 = 'silent';
console.log(areAnagrams(string1, string2)); // Output: true
