function isPalindrome(head) {
  let values = [];
  let current = head;

  // Traverse the linked list
  while (current) {
    values.push(current.value);
    current = current.next;
  }

  let start = 0;
  let end = values.length - 1;

  // Check if it is a palindrome
  while (start <= end) {
    if (values[start] !== values[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}
