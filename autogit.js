function isAnagram(string1, string2) {
  // Convert strings to lowercase and remove non-alphabetic characters
  string1 = string1.toLowerCase().replace(/[^a-z]/g, '');
  string2 = string2.toLowerCase().replace(/[^a-z]/g, '');

  // Convert strings to arrays, sort them, and compare
  const sortedString1 = string1.split('').sort().join('');
  const sortedString2 = string2.split('').sort().join('');

  return sortedString1 === sortedString2;
}

// Example usage
console.log(isAnagram('listen', 'silent')); // Output: true
console.log(isAnagram('hello', 'world')); // Output: false
