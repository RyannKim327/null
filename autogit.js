function isAnagram(str1, str2) {
  // Convert strings to lowercase and remove non-alphabetic characters
  str1 = str1.toLowerCase().replace(/[^a-z]/g, '');
  str2 = str2.toLowerCase().replace(/[^a-z]/g, '');

  // Convert strings into arrays of characters
  let arr1 = str1.split('');
  let arr2 = str2.split('');

  // Sort the arrays
  arr1.sort();
  arr2.sort();

  // Compare the sorted arrays
  return arr1.join('') === arr2.join('');
}

// Example usage
console.log(isAnagram('listen', 'silent')); // true
console.log(isAnagram('hello', 'world')); // false
