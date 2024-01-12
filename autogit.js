class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
function reverseLinkedList(head) {
  let prev = null;
  let current = head;
  let next = null;

  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}
// Create nodes
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

// Connect nodes
node1.next = node2;
node2.next = node3;
node3.next = node4;

// Print original linked list
let current = node1;
while (current !== null) {
  console.log(current.value);
  current = current.next;
}

// Reverse the linked list
const newHead = reverseLinkedList(node1);

// Print reversed linked list
current = newHead;
while (current !== null) {
  console.log(current.value);
  current = current.next;
}
Original Linked List: 1 -> 2 -> 3 -> 4
Reversed Linked List: 4 -> 3 -> 2 -> 1
