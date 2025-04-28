function isPalindrome(str: string): boolean {
  // Normalize the string: remove non-alphanumeric characters and convert to lowercase
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Reverse the cleaned string
  const reversed = cleaned.split('').reverse().join('');

  // Check if the cleaned string is the same as its reverse
  return cleaned === reversed;
}
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
