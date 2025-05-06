function areAnagrams(str1: string, str2: string): boolean {
  // Normalize strings: lowercase and remove non-alphabetical characters if needed
  const normalize = (str: string) =>
    str.toLowerCase().replace(/[\W_]+/g, '').split('').sort().join('');

  return normalize(str1) === normalize(str2);
}

// Example usage:
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world"));   // false
