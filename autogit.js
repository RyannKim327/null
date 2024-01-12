class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findMiddleElement(head) {
  let slowPtr = head; // Moves one node at a time
  let fastPtr = head; // Moves two nodes at a time

  while (fastPtr !== null && fastPtr.next !== null) {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next.next;
  }

  return slowPtr.value;
}
// Create the linked list: 1 -> 2 -> 3 -> 4 -> 5
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

// Find the middle element
let middleElement = findMiddleElement(head);
console.log(middleElement); // Output: 3
