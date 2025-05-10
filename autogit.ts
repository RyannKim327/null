function isPalindrome(s: string): boolean {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleaned = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  // Reverse the cleaned string
  const reversed = cleaned.split('').reverse().join('');
  // Check if cleaned string equals its reverse
  return cleaned === reversed;
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("hello"));                          // false
