function isAnagram(str1, str2) {
  // Convert strings to lowercase and remove whitespace
  str1 = str1.toLowerCase().replace(/[\W_]+/g, '');
  str2 = str2.toLowerCase().replace(/[\W_]+/g, '');

  // Convert strings to arrays, sort them, and join back into strings
  let sorted1 = str1.split('').sort().join('');
  let sorted2 = str2.split('').sort().join('');

  // Compare the sorted strings
  return sorted1 === sorted2;
}
console.log(isAnagram('listen', 'silent')); // Output: true
console.log(isAnagram('hello', 'world'));   // Output: false
console.log(isAnagram('Debit Card', 'Bad Credit')); // Output: true (case-insensitive, ignoring whitespace)
