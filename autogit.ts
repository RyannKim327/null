function areAnagrams(str1: string, str2: string): boolean {
  // Remove spaces and convert to lowercase for a case-insensitive check
  const normalize = (str: string) =>
    str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');

  return normalize(str1) === normalize(str2);
}

// Example usage:
console.log(areAnagrams('Listen', 'Silent')); // true
console.log(areAnagrams('Hello', 'Olelh'));   // true
console.log(areAnagrams('Apple', 'Pabble'));  // false
