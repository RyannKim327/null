function isPalindromeLinkedList(head) {
  const values = [];
  let node = head;

  // Traverse the linked list and store the values in an array
  while (node !== null) {
    values.push(node.value);
    node = node.next;
  }

  let start = 0;
  let end = values.length - 1;

  // Check if the list is a palindrome
  while (start < end) {
    if (values[start] !== values[end]) {
      return false;
    }

    start++;
    end--;
  }

  return true;
}
