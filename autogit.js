function getLength(head) {
  let length = 0;
  let currentNode = head;

  while (currentNode !== null) {
    length++;
    currentNode = currentNode.next;
  }

  return length;
}
// Define a sample node structure
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Create a linked list with 3 nodes
const head = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);

head.next = node2;
node2.next = node3;

// Get the length of the linked list
const length = getLength(head);
console.log(length); // Output: 3
