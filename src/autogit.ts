function areAnagrams(str1: string, str2: string): boolean {
  const format = (str: string) =>
    str
      .toLowerCase()
      .replace(/[\W_]+/g, '')  // remove non-alphanumeric characters
      .split('')
      .sort()
      .join('');
    
  return format(str1) === format(str2);
}

// Example usage:
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world"));   // false
function areAnagrams(str1: string, str2: string): boolean {
  const format = (str: string) =>
    str.toLowerCase().replace(/[\W_]+/g, '');

  const s1 = format(str1);
  const s2 = format(str2);

  if (s1.length !== s2.length) return false;

  const charCount: Record<string, number> = {};

  for (const char of s1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (const char of s2) {
    if (!charCount[char]) return false;
    charCount[char]--;
  }

  return true;
}

// Example usage:
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "bellow"));  // false
