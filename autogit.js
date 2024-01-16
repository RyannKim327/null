function LinkedListNode(data) {
  this.data = data;
  this.next = null;
}

function getLinkedListLength(head) {
  let length = 0;
  let currentNode = head;

  while (currentNode !== null) {
    length++;
    currentNode = currentNode.next;
  }

  return length;
}
