function getLinkedListLength(head) {
  let current = head;
  let length = 0;

  while (current !== null) {
    length++;
    current = current.next; // Move to the next node
  }

  return length;
}
// Define Node class
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Create a linked list
const head = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);

head.next = node2;
node2.next = node3;

console.log(getLinkedListLength(head)); // Output: 3
