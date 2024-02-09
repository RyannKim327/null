function reverseLinkedList(head) {
  let current = head;
  let previous = null;
  let next = null;

  while (current !== null) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous; // previous will be the new head of the reversed list
}
