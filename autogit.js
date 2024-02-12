function LinkedListNode(value, next) {
  this.value = value;
  this.next = next;
}

function getLinkedListLength(head) {
  let length = 0;
  let current = head;

  while (current !== null) {
    length++;
    current = current.next;
  }

  return length;
}
// Create a linked list: 1 -> 2 -> 3 -> null
const node3 = new LinkedListNode(3, null);
const node2 = new LinkedListNode(2, node3);
const node1 = new LinkedListNode(1, node2);

// Call the function to get the length of the linked list
const length = getLinkedListLength(node1);
console.log(`Length of the linked list: ${length}`);
Length of the linked list: 3
