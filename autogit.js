function getLinkedListLength(head) {
  let length = 0;
  let currentNode = head;

  while (currentNode) {
    length++;
    currentNode = currentNode.next;
  }

  return length;
}
