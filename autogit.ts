function isPalindrome(str: string): boolean {
  // Normalize the string: remove non-alphanumeric characters and make lowercase
  const cleaned = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  // Reverse the cleaned string
  const reversed = cleaned.split('').reverse().join('');
  // Compare cleaned and reversed strings
  return cleaned === reversed;
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("Hello, world!")); // false
