function isAnagram(string1, string2) {
  // Remove non-alphabetic characters and convert to lowercase
  string1 = string1.replace(/[^a-z]/gi, '').toLowerCase();
  string2 = string2.replace(/[^a-z]/gi, '').toLowerCase();

  // Convert strings to arrays, sort them, and join again
  string1 = string1.split('').sort().join('');
  string2 = string2.split('').sort().join('');

  // Compare the sorted strings
  return string1 === string2;
}

// Example usage:
console.log(isAnagram('listen', 'silent')); // Output: true
console.log(isAnagram('adder', 'dared'));   // Output: true
console.log(isAnagram('hello', 'world'));   // Output: false
