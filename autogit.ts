function isPalindrome(s: string): boolean {
  // Normalize string: remove non-alphanumerics, convert to lowercase
  const cleaned = s.replace(/[^a-z0-9]/gi, '').toLowerCase();

  // Reverse the cleaned string
  const reversed = cleaned.split('').reverse().join('');

  // Check if reversed string is the same as the cleaned string
  return cleaned === reversed;
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
