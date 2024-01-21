function getLinkedListLength(head) {
  let count = 0;
  let currentNode = head;

  while (currentNode !== null) {
    count++;
    currentNode = currentNode.next; // Assuming each node has a 'next' property pointing to the next node
  }

  return count;
}
const length = getLinkedListLength(head);
console.log(length);
