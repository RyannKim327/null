function isAnagram(str1: string, str2: string): boolean {
  // Normalize strings: convert to lowercase and remove spaces
  const normalize = (str: string) => 
    str.toLowerCase().replace(/\s+/g, '').split('').sort().join('');
    
  return normalize(str1) === normalize(str2);
}

// Usage examples:
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "billion")); // false
console.log(isAnagram("A gentleman", "Elegant man")); // true
const normalize = (str: string) => 
  str.toLowerCase()
     .replace(/[^a-z]/g, '') // remove non-letter characters
     .split('')
     .sort()
     .join('');
