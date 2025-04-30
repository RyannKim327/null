function areAnagrams(str1: string, str2: string): boolean {
  const normalize = (str: string) =>
    str.toLowerCase()
      .replace(/\s+/g, '')  // Remove spaces
      .split('')
      .sort()
      .join('');
      
  return normalize(str1) === normalize(str2);
}

// Example:
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world")); // false
