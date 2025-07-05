function areAnagrams(str1: string, str2: string): boolean {
  const normalize = (str: string) =>
    str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
  
  return normalize(str1) === normalize(str2);
}

// Usage:
console.log(areAnagrams('listen', 'silent')); // true
console.log(areAnagrams('hello', 'world'));   // false
function areAnagrams(str1: string, str2: string): boolean {
  const normalize = (str: string) =>
    str.replace(/\s+/g, '').toLowerCase();

  if (normalize(str1).length !== normalize(str2).length) {
    return false;
  }

  const countChars = (str: string) => {
    const counts: Record<string, number> = {};
    for (const char of str) {
      counts[char] = (counts[char] || 0) + 1;
    }
    return counts;
  };

  const count1 = countChars(normalize(str1));
  const count2 = countChars(normalize(str2));

  for (const key in count1) {
    if (count1[key] !== count2[key]) {
      return false;
    }
  }

  return true;
}

// Usage:
console.log(areAnagrams('listen', 'silent')); // true
console.log(areAnagrams('hello', 'world'));   // false
