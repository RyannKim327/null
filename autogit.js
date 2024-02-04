class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function findNthFromEnd(head, n) {
  if (head === null) {
    return null; // Empty list
  }

  let slow = head;
  let fast = head;

  // Move the fast pointer n nodes ahead
  for (let i = 0; i < n; i++) {
    if (fast === null) {
      return null; // List has fewer than n nodes
    }
    fast = fast.next;
  }

  // Move both pointers until fast reaches the end
  while (fast !== null) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}
// Example usage
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

const n = 2; // Find the 2nd node from the end
const nthNodeFromEnd = findNthFromEnd(head, n);

if (nthNodeFromEnd !== null) {
  console.log(`The ${n}th node from the end is ${nthNodeFromEnd.data}`);
} else {
  console.log(`The list is empty or has fewer than ${n} nodes`);
}
