function areAnagrams(str1: string, str2: string): boolean {
  // Normalize: convert to lowercase and remove non-alphabetic characters (optional)
  const normalize = (str: string) =>
    str.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('');

  return normalize(str1) === normalize(str2);
}

// Usage
console.log(areAnagrams('listen', 'silent')); // true
console.log(areAnagrams('hello', 'world'));   // false
function areAnagrams(str1: string, str2: string): boolean {
  const cleanStr1 = str1.toLowerCase().replace(/[^a-z0-9]/g, '');
  const cleanStr2 = str2.toLowerCase().replace(/[^a-z0-9]/g, '');

  if (cleanStr1.length !== cleanStr2.length) return false;

  const charCount: Record<string, number> = {};

  for (const char of cleanStr1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (const char of cleanStr2) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }

  return true;
}
