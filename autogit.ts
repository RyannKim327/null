function areAnagrams(str1: string, str2: string): boolean {
  const normalize = (str: string) => 
    str.toLowerCase().replace(/\s+/g, '').split('').sort().join('');
  return normalize(str1) === normalize(str2);
}

// Usage
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world"));   // false
function areAnagrams(str1: string, str2: string): boolean {
  const charCount = (str: string): Record<string, number> => {
    const count: Record<string, number> = {};
    for (const ch of str.toLowerCase().replace(/\s+/g, '')) {
      count[ch] = (count[ch] || 0) + 1;
    }
    return count;
  };
  const count1 = charCount(str1);
  const count2 = charCount(str2);

  if (Object.keys(count1).length !== Object.keys(count2).length) {
    return false;
  }

  for (const key in count1) {
    if (count1[key] !== count2[key]) {
      return false;
    }
  }
  return true;
}

// Usage
console.log(areAnagrams("Clint Eastwood", "Old West Action")); // true
