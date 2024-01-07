function isLinkedListPalindrome(head) {
  let current = head;
  let values = [];

  // Traverse the linked list and store the values in an array
  while (current) {
    values.push(current.value);
    current = current.next;
  }

  // Compare the array elements from both ends
  while (values.length > 1) {
    if (values.shift() !== values.pop()) {
      return false;
    }
  }

  return true;
}
