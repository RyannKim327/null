function areAnagrams(str1, str2) {
  // Remove non-alphabetic characters and convert to lowercase
  str1 = str1.replace(/[^A-Za-z]/g, '').toLowerCase();
  str2 = str2.replace(/[^A-Za-z]/g, '').toLowerCase();

  // Convert the strings to arrays of characters
  var arr1 = str1.split('');
  var arr2 = str2.split('');

  // Sort the arrays alphabetically
  arr1.sort();
  arr2.sort();

  // Join the sorted arrays back into strings
  var sortedStr1 = arr1.join('');
  var sortedStr2 = arr2.join('');

  // Compare the two resulting strings
  return sortedStr1 === sortedStr2;
}

// Test the function
console.log(areAnagrams('listen', 'silent')); // true
console.log(areAnagrams('hello', 'world')); // false
console.log(areAnagrams('rail safety', 'fairy tales')); // true
