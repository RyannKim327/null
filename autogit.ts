function isPalindrome(str: string): boolean {
  // Normalize string: remove non-alphanumeric and convert to lowercase
  const cleaned = str.replace(/[^a-z0-9]/gi, '').toLowerCase();

  // Compare cleaned string to its reverse
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("Hello World")); // false
