function areAnagrams(str1: string, str2: string): boolean {
  // Remove whitespace and convert to lowercase for a case-insensitive comparison
  const normalize = (str: string) =>
    str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
    
  return normalize(str1) === normalize(str2);
}

// Example usage:
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world"));   // false
