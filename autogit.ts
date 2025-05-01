function isPalindrome(s: string): boolean {
  // Normalize the string: remove non-alphanumeric chars and make it lowercase
  const normalized = s.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Compare the string with its reverse
  const reversed = normalized.split('').reverse().join('');
  return normalized === reversed;
}
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("hello")); // false
