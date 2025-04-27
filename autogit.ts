function isPalindrome(str: string): boolean {
  // Convert to lowercase to ignore case differences
  const normalized = str.toLowerCase();

  // Remove non-alphanumeric characters if you're focusing on words or phrases
  const cleanStr = normalized.replace(/[^a-z0-9]/g, '');

  // Reverse the cleaned string
  const reversed = cleanStr.split('').reverse().join('');

  // Check if the cleaned string matches its reverse
  return cleanStr === reversed;
}
console.log(isPalindrome("Race car")); // true
console.log(isPalindrome("Hello")); // false
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
