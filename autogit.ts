function isPalindrome(str: string): boolean {
  const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, ''); // ignore case and non-alphanumerics
  const reversed = normalized.split('').reverse().join('');
  return normalized === reversed;
}

// Example usage:
console.log(isPalindrome("Racecar")); // true
console.log(isPalindrome("Hello"));   // false
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
