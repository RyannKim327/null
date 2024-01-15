function isLinkedListPalindrome(head) {
  const values = [];
  let current = head;

  // Step 2: Traverse the linked list and store the values
  while (current) {
    values.push(current.val);
    current = current.next;
  }

  let start = 0;
  let end = values.length - 1;

  // Step 3: Compare values using two pointers
  while (start < end) {
    if (values[start] !== values[end]) {
      return false; // Step 4: Not a palindrome
    }
    start++;
    end--;
  }

  return true; // Step 5: Linked list is a palindrome
}
