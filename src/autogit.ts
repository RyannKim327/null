function areAnagrams(str1: string, str2: string): boolean {
  // Normalize - you can also add regex to remove punctuation if needed
  const normalize = (str: string) => str.toLowerCase().split('').sort().join('');
  
  return normalize(str1) === normalize(str2);
}

// Example usage:
console.log(areAnagrams('listen', 'silent')); // true
console.log(areAnagrams('hello', 'world'));   // false
const normalize = (str: string) =>
  str
    .toLowerCase()
    .replace(/[^a-z]/g, '') // keep only letters
    .split('')
    .sort()
    .join('');
