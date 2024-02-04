function isAnagram(string1, string2) {
  // Convert strings to lowercase and remove non-alphabetic characters or spaces
  string1 = string1.toLowerCase().replace(/[^a-z]/g, '');
  string2 = string2.toLowerCase().replace(/[^a-z]/g, '');

  // Convert strings into arrays of characters
  let arr1 = string1.split('');
  let arr2 = string2.split('');

  // Sort the character arrays
  arr1.sort();
  arr2.sort();

  // Compare the sorted arrays
  return arr1.join('') === arr2.join('');
}

// Example usage
console.log(isAnagram('listen', 'silent')); // true
console.log(isAnagram('hello', 'world')); // false
