function isAnagram(str1, str2) {
  // Remove non-alphanumeric characters and convert to lowercase
  const normalizedStr1 = str1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const normalizedStr2 = str2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Convert strings to arrays, sort them, and compare
  const sortedStr1 = normalizedStr1.split('').sort().join('');
  const sortedStr2 = normalizedStr2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
}

// Example usage
console.log(isAnagram('anagram', 'nagaram')); // true
console.log(isAnagram('listen', 'silent')); // true
console.log(isAnagram('hello', 'world')); // false
