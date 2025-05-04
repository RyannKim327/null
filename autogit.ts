function areAnagrams(str1: string, str2: string): boolean {
  // Remove non-alphanumeric characters and make lowercase
  const normalize = (str: string) =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '') 
      .split('')
      .sort()
      .join('');
  
  return normalize(str1) === normalize(str2);
}

// Example usage:
console.log(areAnagrams("Listen", "Silent")); // true
console.log(areAnagrams("Hello", "Olelh"));   // true
console.log(areAnagrams("Test", "Taste"));     // false
