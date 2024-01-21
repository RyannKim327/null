function getLinkedListLength(head) {
  let length = 0;
  let currentNode = head;

  while (currentNode !== null) {
    length++;
    currentNode = currentNode.next; // Assumes each node has a 'next' property
  }

  return length;
}
const length = getLinkedListLength(head);
console.log(length);
