function reverseLinkedList(head) {
  if (!head || !head.next) {
    return head;
  }

  let previousNode = null;
  let currentNode = head;
  let nextNode = null;

  while (currentNode) {
    nextNode = currentNode.next;
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = nextNode;
  }

  head = previousNode;
  return head;
}
