class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverseLinkedList(head) {
  let previous = null;
  let current = head;
  let next = null;

  while (current !== null) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
}

// Example usage:
// Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

// Reverse the linked list
const reversedHead = reverseLinkedList(head);

// Print the reversed linked list: 5 -> 4 -> 3 -> 2 -> 1
let current = reversedHead;
while (current !== null) {
  console.log(current.value);
  current = current.next;
}
