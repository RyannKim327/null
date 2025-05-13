function areAnagrams(str1: string, str2: string): boolean {
  // Anagrams must be the same length
  if (str1.length !== str2.length) return false;

  // Normalize the strings (optional: lowercase and remove spaces/punctuation)
  const normalize = (str: string) => str.toLowerCase().replace(/[\W_]+/g, "").split("").sort().join("");

  return normalize(str1) === normalize(str2);
}

// Example usage:
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world")); // false
