function areAnagrams(str1: string, str2: string): boolean {
  // Early exit if lengths don't match
  if (str1.length !== str2.length) return false;

  // Sort and compare
  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');
  return sortedStr1 === sortedStr2;
}
function areAnagrams(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) return false;

  const charCount = new Map<string, number>();

  for (const char of str1) {
    charCount.set(char, (charCount.get(char) ?? 0) + 1);
  }

  for (const char of str2) {
    if (!charCount.has(char)) return false;

    const newCount = charCount.get(char)! - 1;
    if (newCount < 0) return false;

    charCount.set(char, newCount);
  }

  return true;
}
