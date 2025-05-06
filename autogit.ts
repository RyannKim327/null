function isPalindrome(str: string): boolean {
  // Normalize the string: remove non-alphanumeric, convert to lowercase
  const cleaned = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  
  // Reverse the string
  const reversed = cleaned.split('').reverse().join('');
  
  // Compare cleaned string with reversed string
  return cleaned === reversed;
}
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("Hello")); // false
