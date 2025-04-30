function isPalindrome(s: string): boolean {
  // Normalize the string: remove non-alphanumeric chars and convert to lowercase
  const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Check if the cleaned string reads the same forwards and backwards
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car"));                     // false
