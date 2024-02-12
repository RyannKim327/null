function areAnagrams(str1, str2) {
  // Remove non-alphabetic characters and convert to lowercase
  const normalizedStr1 = str1.replace(/[^A-Za-z]/g, '').toLowerCase();
  const normalizedStr2 = str2.replace(/[^A-Za-z]/g, '').toLowerCase();
  
  // Convert strings to arrays, sort them, and join back into strings
  const sortedStr1 = normalizedStr1.split('').sort().join('');
  const sortedStr2 = normalizedStr2.split('').sort().join('');
  
  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}

// Example usage:
console.log(areAnagrams('listen', 'silent')); // true
console.log(areAnagrams('hello', 'world')); // false
