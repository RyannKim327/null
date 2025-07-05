function areAnagrams(str1: string, str2: string): boolean {
  // Remove whitespace and convert to lowercase for case-insensitive comparison
  const normalize = (str: string) => str.replace(/\s+/g, '').toLowerCase();

  const s1 = normalize(str1);
  const s2 = normalize(str2);

  if (s1.length !== s2.length) {
    return false; // Different lengths, can't be anagrams
  }

  const sortString = (str: string) => str.split('').sort().join('');

  return sortString(s1) === sortString(s2);
}

// Example usage:
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world"));   // false
