function getLinkedListLength(head) {
  let length = 0;
  let pointer = head;

  while (pointer !== null) {
    length++;
    pointer = pointer.next;
  }

  return length;
}
