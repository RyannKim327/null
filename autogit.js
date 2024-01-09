function isAnagram(string1, string2) {
  // Convert both strings to lowercase and remove non-alphanumeric characters
  string1 = string1.toLowerCase().replace(/[^a-z0-9]/g, '');
  string2 = string2.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Convert strings to character arrays, sort them, and convert back to strings
  const sortedString1 = string1.split('').sort().join('');
  const sortedString2 = string2.split('').sort().join('');

  // Compare the sorted strings
  return sortedString1 === sortedString2;
}

// Example usage:
console.log(isAnagram('listen', 'silent')); // true
console.log(isAnagram('hello', 'bye')); // false
console.log(isAnagram('Eleven plus two', 'Twelve plus one')); // true
console.log(isAnagram('restful', 'fluster')); // true
