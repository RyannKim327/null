function areAnagrams(str1: string, str2: string): boolean {
  // Normalize the strings: remove non-letter characters, lowercase
  const normalize = (str: string) =>
    str.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('');

  return normalize(str1) === normalize(str2);
}

// Example usage:
console.log(areAnagrams('listen', 'silent')); // true
console.log(areAnagrams('hello', 'world'));   // false
