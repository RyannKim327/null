function areAnagrams(str1: string, str2: string): boolean {
  // If lengths differ, they can't be anagrams
  if (str1.length !== str2.length) return false;

  // Sort characters in both strings and compare
  const sorted1 = str1.split('').sort().join('');
  const sorted2 = str2.split('').sort().join('');

  return sorted1 === sorted2;
}

// Example usage:
console.log(areAnagrams("listen", "silent"));  // true
console.log(areAnagrams("hello", "world"));    // false
