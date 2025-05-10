function isPalindrome(s: string): boolean {
  // Normalize string: remove non-alphanumeric chars and convert to lowercase
  const cleaned = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  // Check palindrome by comparing characters from start and end
  let left = 0;
  let right = cleaned.length - 1;
  
  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }
    left++;
    right--;
  }
  
  return true;
}
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
