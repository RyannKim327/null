function areAnagrams(str1, str2) {
  // Convert both strings to lowercase
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // Remove non-alphabetic characters using regular expressions
  str1 = str1.replace(/[^a-z]/g, '');
  str2 = str2.replace(/[^a-z]/g, '');

  // Sort the characters in both strings
  str1 = str1.split('').sort().join('');
  str2 = str2.split('').sort().join('');

  // Compare the sorted strings
  return str1 === str2;
}

// Example usage
console.log(areAnagrams('listen', 'silent')); // true
console.log(areAnagrams('hello', 'world')); // false
