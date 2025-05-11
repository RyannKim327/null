function isPalindrome(str: string): boolean {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}
console.log(isPalindrome("Racecar"));    // true
console.log(isPalindrome("A man, a plan, a canal: Panama"));  // true
console.log(isPalindrome("Hello"));      // false
