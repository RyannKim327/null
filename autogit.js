function getLinkedListLength(head) {
  let current = head;
  let length = 0;

  while (current !== null) {
    length++;
    current = current.next;
  }

  return length;
}
