function isPalindrome(str: string): boolean {
  // Normalize the string: remove non-alphanumeric chars and convert to lowercase
  const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Reverse the normalized string
  const reversed = normalized.split('').reverse().join('');

  // Compare both
  return normalized === reversed;
}

// Example
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("Hello, world!")); // false
