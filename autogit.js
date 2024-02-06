function areAnagrams(str1, str2) {
  const normalize = (str) => {
    return str.replace(/[^A-Za-z]/g, '').toLowerCase();
  };

  const sortedStr1 = normalize(str1).split('').sort().join('');
  const sortedStr2 = normalize(str2).split('').sort().join('');

  return sortedStr1 === sortedStr2;
}

// Example usage
console.log(areAnagrams('listen', 'silent'));  // true
console.log(areAnagrams('hello', 'world'));    // false
