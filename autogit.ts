function isPalindrome(str: string): boolean {
  // Normalize the string by removing non-alphanumeric characters and converting to lowercase
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Check if the cleaned string is the same forwards and backwards
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("hello")); // false
