function areAnagrams(str1, str2) {
  // Remove non-alphanumeric characters and convert to lowercase
  const normalizedStr1 = str1.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  const normalizedStr2 = str2.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  
  // Split strings into arrays, sort, and join back into strings
  const sortedStr1 = normalizedStr1.split('').sort().join('');
  const sortedStr2 = normalizedStr2.split('').sort().join('');
  
  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}

// Example usage
const str1 = 'listen';
const str2 = 'silent';

console.log(areAnagrams(str1, str2)); // Output: true
