function isAnagram(str1, str2) {
  // Convert both strings to lowercase
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // Remove spaces and non-alphabetic characters
  str1 = str1.replace(/[^a-z0-9]/g, '');
  str2 = str2.replace(/[^a-z0-9]/g, '');

  // Sort both strings
  str1 = str1.split('').sort().join('');
  str2 = str2.split('').sort().join('');

  // Compare the sorted strings
  return str1 === str2;
}

// Example usage
console.log(isAnagram('listen', 'silent')); // true
console.log(isAnagram('hello', 'world')); // false
