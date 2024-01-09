function reverseLinkedList(head) {
  if (!head || !head.next) {
    // Empty list or only one node
    return head;
  }

  let current = head;
  let previous = null;
  let next = null;

  while (current) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
}
