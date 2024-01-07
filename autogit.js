function getLinkedListLength(head) {
  let length = 0;
  let current = head;
  
  while (current !== null) {
    length++;
    current = current.next;
  }
  
  return length;
}
