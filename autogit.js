function areAnagrams(str1, str2) {
  // Remove non-alphanumeric characters and convert to lowercase
  str1 = str1.replace(/[^0-9a-z]/gi, '').toLowerCase();
  str2 = str2.replace(/[^0-9a-z]/gi, '').toLowerCase();
  
  // Convert the strings to arrays and sort them
  var arr1 = str1.split('').sort();
  var arr2 = str2.split('').sort();
  
  // Convert the sorted arrays back to strings and compare them
  var sortedStr1 = arr1.join('');
  var sortedStr2 = arr2.join('');
  
  // Check if the sorted strings are equal
  return sortedStr1 === sortedStr2;
}

// Example usage
console.log(areAnagrams('listen', 'silent'));  // Output: true
console.log(areAnagrams('hello', 'world'));    // Output: false
console.log(areAnagrams('Clint Eastwood', 'Old West Action')); // Output: true
