function getListLength(head) {
  let length = 0;
  let currentNode = head;

  while (currentNode !== null) {
    length++;
    currentNode = currentNode.next;
  }

  return length;
}
