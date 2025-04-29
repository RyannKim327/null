function isPalindrome(str: string): boolean {
  // Normalize the string: remove non-alphanumeric characters and convert to lowercase
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Check if cleaned string is equal to its reverse
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}

// Usage:
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("hello")); // false
