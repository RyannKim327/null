class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function reverseLinkedList(head) {
  let current = head;
  let previous = null;
  let next = null;

  while (current !== null) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
}
// Create the linked list
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;

// Output the original linked list
let current = node1;
while (current !== null) {
  console.log(current.value); // Output: 1, 2, 3, 4
  current = current.next;
}

// Reverse the linked list
const reversedHead = reverseLinkedList(node1);

// Output the reversed linked list
current = reversedHead;
while (current !== null) {
  console.log(current.value); // Output: 4, 3, 2, 1
  current = current.next;
}
