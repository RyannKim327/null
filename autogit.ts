function areAnagrams(str1: string, str2: string): boolean {
  // Quick fail if lengths differ
  if (str1.length !== str2.length) return false;

  // Normalize strings: remove whitespace & lowercase (optional)
  const s1 = str1.toLowerCase().replace(/\s+/g, '');
  const s2 = str2.toLowerCase().replace(/\s+/g, '');

  // Sort characters in the strings
  const sortedS1 = s1.split('').sort().join('');
  const sortedS2 = s2.split('').sort().join('');

  // Compare sorted strings
  return sortedS1 === sortedS2;
}
console.log(areAnagrams('listen', 'silent'));  // true
console.log(areAnagrams('hello', 'world'));    // false
function areAnagrams(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) return false;

  const map = new Map<string, number>();

  for (const char of str1.toLowerCase()) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (const char of str2.toLowerCase()) {
    if (!map.has(char)) return false;
    map.set(char, map.get(char)! - 1);
    if (map.get(char) === 0) {
      map.delete(char);
    }
  }

  return map.size === 0;
}
