function isPalindrome(str: string): boolean {
  // Normalize the string: remove non-alphanumeric chars, and convert to lowercase
  const sanitized = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  // Check if the sanitized string reads the same forwards and backwards
  return sanitized === sanitized.split('').reverse().join('');
}
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("hello")); // false
