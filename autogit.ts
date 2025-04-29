function areAnagrams(str1: string, str2: string): boolean {
  const normalize = (s: string) =>
    s.toLowerCase()
     .replace(/[\W_]+/g, '') // removes non-alphanumeric characters
     .split('')
     .sort()
     .join('');

  return normalize(str1) === normalize(str2);
}
console.log(areAnagrams('Listen', 'Silent')); // true
console.log(areAnagrams('Hello', 'Olelh'));   // true
console.log(areAnagrams('Test', 'Best'));     // false
function areAnagrams(str1: string, str2: string): boolean {
  const cleanStr1 = str1.toLowerCase().replace(/[\W_]+/g, '');
  const cleanStr2 = str2.toLowerCase().replace(/[\W_]+/g, '');

  if (cleanStr1.length !== cleanStr2.length) return false;

  const charCount: Record<string, number> = {};

  for (const char of cleanStr1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (const char of cleanStr2) {
    if (!charCount[char]) return false;
    charCount[char]--;
  }

  return true;
}
