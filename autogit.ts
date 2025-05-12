function isPalindrome(str: string): boolean {
  // Normalize the string: remove non-alphanumeric and convert to lowercase
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  // Check if the cleaned string is the same forwards and backwards
  return cleaned === cleaned.split('').reverse().join('');
}

// Example usage:
console.log(isPalindrome("Racecar")); // true
console.log(isPalindrome("Hello"));   // false
