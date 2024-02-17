class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findNthNodeFromEnd(head, n) {
  let p1 = head;
  let p2 = head;

  // Move p2 n nodes ahead
  for (let i = 0; i < n; i++) {
    if (p2 === null) {
      return null; // n is greater than the length of the linked list
    }
    p2 = p2.next;
  }

  // Move both pointers until p2 reaches the end of the list
  while (p2 !== null) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p1;
}

// Example usage
// Creating a linked list: 1 -> 2 -> 3 -> 4 -> 5
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

let n = 2; // Find the 2nd node from the end
let nthNode = findNthNodeFromEnd(head, n);

if (nthNode !== null) {
  console.log(`The ${n}th node from the end is: ${nthNode.value}`);
} else {
  console.log(`The length of the linked list is less than ${n}`);
}
