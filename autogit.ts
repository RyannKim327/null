function areAnagrams(str1: string, str2: string): boolean {
  // Remove whitespace and convert to lowercase if needed
  const normalize = (str: string) => str.replace(/\s+/g, '').toLowerCase();

  const s1 = normalize(str1);
  const s2 = normalize(str2);

  // If lengths differ after normalization, they can't be anagrams
  if (s1.length !== s2.length) return false;

  // Compare sorted characters
  const sortedS1 = s1.split('').sort().join('');
  const sortedS2 = s2.split('').sort().join('');
  return sortedS1 === sortedS2;
}
function areAnagrams(str1: string, str2: string): boolean {
  const normalize = (str: string) => str.replace(/\s+/g, '').toLowerCase();

  const s1 = normalize(str1);
  const s2 = normalize(str2);

  if (s1.length !== s2.length) return false;

  const getCharCount = (str: string): Record<string, number> => {
    const count: Record<string, number> = {};
    for (const char of str) {
      count[char] = (count[char] || 0) + 1;
    }
    return count;
  };

  const count1 = getCharCount(s1);
  const count2 = getCharCount(s2);

  // Compare the frequency maps
  for (const key in count1) {
    if (count1[key] !== count2[key]) return false;
  }
  return true;
}
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world")); // false
