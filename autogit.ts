function isPalindrome(s: string): boolean {
  // Normalize the string: remove non-alphanumeric and convert to lowercase
  const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  // Check if cleaned string equals its reverse
  return cleaned === cleaned.split('').reverse().join('');
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("hello")); // false
