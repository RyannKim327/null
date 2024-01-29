function isAnagram(str1, str2) {
  // Remove non-alphanumeric characters and convert to lowercase
  const sanitizedStr1 = str1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const sanitizedStr2 = str2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  // Sort the strings
  const sortedStr1 = sanitizedStr1.split('').sort().join('');
  const sortedStr2 = sanitizedStr2.split('').sort().join('');

  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}

// Example usage
console.log(isAnagram('listen', 'silent')); // Output: true
console.log(isAnagram('hello', 'world')); // Output: false
console.log(isAnagram('Dormitory', 'dirty room')); // Output: true
