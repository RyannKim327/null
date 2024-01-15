function isAnagram(str1, str2) {
  // Remove non-alphanumeric characters and convert to lowercase
  str1 = str1.replace(/[^\w]/g, '').toLowerCase();
  str2 = str2.replace(/[^\w]/g, '').toLowerCase();

  // Sort the strings
  str1 = str1.split('').sort().join('');
  str2 = str2.split('').sort().join('');

  // Compare the sorted strings
  return str1 === str2;
}

// Example usage
console.log(isAnagram('listen', 'silent')); // true
console.log(isAnagram('hello', 'world')); // false
console.log(isAnagram('rail safety', 'fairy tales')); // true
console.log(isAnagram('Astronomer', 'Moon Starer')); // true
