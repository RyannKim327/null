function areAnagrams(str1: string, str2: string): boolean {
  const normalize = (str: string) => 
    str.replace(/\s+/g, '').toLowerCase(); // Remove spaces and convert to lowercase

  const sortedStr1 = normalize(str1).split('').sort().join('');
  const sortedStr2 = normalize(str2).split('').sort().join('');

  return sortedStr1 === sortedStr2;
}
console.log(areAnagrams('listen', 'silent')); // true
console.log(areAnagrams('hello', 'billion')); // false
function areAnagramsFast(str1: string, str2: string): boolean {
  const normalize = (str: string) => str.replace(/\s+/g, '').toLowerCase();

  const buildFrequencyMap = (str: string) => {
    const map: Record<string, number> = {};
    for (const char of str) {
      map[char] = (map[char] || 0) + 1;
    }
    return map;
  };

  const s1 = normalize(str1);
  const s2 = normalize(str2);

  if (s1.length !== s2.length) return false;

  const freq1 = buildFrequencyMap(s1);
  const freq2 = buildFrequencyMap(s2);

  for (const key in freq1) {
    if (freq1[key] !== freq2[key]) return false;
  }
  return true;
}
