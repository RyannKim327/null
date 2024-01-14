function areAnagrams(str1, str2) {
  // Remove non-alphabetic characters and convert to lowercase
  str1 = str1.replace(/[^a-z]/gi, '').toLowerCase();
  str2 = str2.replace(/[^a-z]/gi, '').toLowerCase();

  // Convert strings to arrays, sort them, and convert back to strings
  str1 = str1.split('').sort().join('');
  str2 = str2.split('').sort().join('');

  // Compare the two resulting strings
  return str1 === str2;
}

// Testing the function
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "goodbye")); // false
