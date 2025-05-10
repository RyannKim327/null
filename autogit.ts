function isPalindrome(s: string): boolean {
  // Remove non-alphanumeric characters and convert to lowercase for a more robust check
  const cleaned = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}

// Example usage:
console.log(isPalindrome("Racecar")); // true
console.log(isPalindrome("Hello"));   // false
