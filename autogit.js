function areAnagrams(string1, string2) {
  // Remove non-alphabetic characters and convert to lowercase
  string1 = string1.replace(/[^a-z]/gi, '').toLowerCase();
  string2 = string2.replace(/[^a-z]/gi, '').toLowerCase();

  // Split the strings into character arrays, sort them, and convert back to strings
  string1 = string1.split('').sort().join('');
  string2 = string2.split('').sort().join('');

  // Compare the sorted strings
  if (string1 === string2) {
    return true; // The strings are anagrams
  } else {
    return false; // The strings are not anagrams
  }
}

// Example usage
console.log(areAnagrams('heart', 'earth')); // Output: true
console.log(areAnagrams('listen', 'silent')); // Output: true
console.log(areAnagrams('hello', 'hollow')); // Output: false
