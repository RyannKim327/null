function isAnagram(string1, string2) {
  // Convert strings to lowercase and remove non-alphanumeric characters
  string1 = string1.toLowerCase().replace(/[^a-z0-9]/g, '');
  string2 = string2.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Sort the strings alphabetically
  string1 = string1.split('').sort().join('');
  string2 = string2.split('').sort().join('');

  // Compare the sorted strings
  return string1 === string2;
}

// Example usage
console.log(isAnagram('listen', 'silent')); // true
console.log(isAnagram('hello', 'bye')); // false
