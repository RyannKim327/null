function isPalindrome(input: string): boolean {
  // Normalize: lowercase and remove non-alphanumeric characters
  const normalized = input.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Reverse the normalized string
  const reversed = normalized.split('').reverse().join('');

  // Check if original normalized string is the same as its reverse
  return normalized === reversed;
}
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
