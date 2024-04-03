class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function findNthNodeFromEnd(head, n) {
  let firstPointer = head;
  let secondPointer = head;

  // Move the firstPointer n nodes ahead
  for (let i = 0; i < n; i++) {
    if (firstPointer === null) {
      return null; // If the list has fewer than n nodes
    }
    firstPointer = firstPointer.next;
  }

  // Move both pointers one node at a time
  while (firstPointer !== null) {
    firstPointer = firstPointer.next;
    secondPointer = secondPointer.next;
  }

  return secondPointer;
}

// Example usage
// Constructing a simple linked list: 1 -> 2 -> 3 -> 4 -> 5
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

let n = 2;
let nthNodeFromEnd = findNthNodeFromEnd(head, n);
if (nthNodeFromEnd !== null) {
  console.log(`The ${n}th node from the end is: ${nthNodeFromEnd.data}`);
} else {
  console.log(`The list has fewer than ${n} nodes.`);
}
