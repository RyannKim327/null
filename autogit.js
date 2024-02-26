class Node {
  constructor(data, next = null) {
    this.data = data;
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

  head = prev; // Update the head to be the last element after reversal
  return head;
}

// Test the reverseLinkedList function
// Create a sample linked list: 1 -> 2 -> 3 -> 4 -> 5
let node5 = new Node(5);
let node4 = new Node(4, node5);
let node3 = new Node(3, node4);
let node2 = new Node(2, node3);
let node1 = new Node(1, node2);

console.log("Original linked list:");
let current = node1;
while (current !== null) {
  console.log(current.data);
  current = current.next;
}

let reversedHead = reverseLinkedList(node1);

console.log("\nReversed linked list:");
current = reversedHead;
while (current !== null) {
  console.log(current.data);
  current = current.next;
}
