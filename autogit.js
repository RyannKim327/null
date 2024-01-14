function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

function findLinkedListLength(head) {
  let length = 0;
  let current = head;

  while (current !== null) {
    length++;
    current = current.next;
  }

  return length;
}
// Create a sample linked list
const node1 = new LinkedListNode(1);
const node2 = new LinkedListNode(2);
const node3 = new LinkedListNode(3);
node1.next = node2;
node2.next = node3;

// Find the length of the linked list
const length = findLinkedListLength(node1);
console.log(length); // Output: 3
