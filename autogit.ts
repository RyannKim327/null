function areAnagrams(str1: string, str2: string): boolean {
  // Quick length check
  if (str1.length !== str2.length) return false;

  // Normalize strings: lowercase and remove non-alphabetic characters if needed
  const normalize = (str: string) => str.toLowerCase().split('').sort().join('');

  return normalize(str1) === normalize(str2);
}

// Example usage:
console.log(areAnagrams('listen', 'silent')); // true
console.log(areAnagrams('hello', 'world'));   // false
