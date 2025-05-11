function areAnagrams(str1: string, str2: string): boolean {
  // Normalize strings: lowercase and remove non-alphabetic characters (optional)
  const normalize = (str: string) =>
    str.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');

  return normalize(str1) === normalize(str2);
}

// Usage examples:
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("apple", "pale"));   // false
