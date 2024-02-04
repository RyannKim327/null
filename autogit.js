function isAnagram(str1, str2) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr1 = str1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const cleanStr2 = str2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Convert the strings to arrays, sort them, and convert back to strings
  const sortedStr1 = cleanStr1.split('').sort().join('');
  const sortedStr2 = cleanStr2.split('').sort().join('');

  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}

// Test cases
console.log(isAnagram('listen', 'silent')); // Output: true
console.log(isAnagram('debit card', 'bad credit')); // Output: true
console.log(isAnagram('hello', 'world')); // Output: false
