class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findNthNodeFromEnd(head, n) {
  let slow = head;
  let fast = head;

  // Move fast pointer n positions ahead
  for (let i = 0; i < n; i++) {
    if (fast === null) {
      return null; // n is greater than the length of the list
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
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

let n = 2;
let nthNodeFromEnd = findNthNodeFromEnd(head, n);

if (nthNodeFromEnd !== null) {
  console.log(`The ${n}th node from the end is: ${nthNodeFromEnd.value}`);
} else {
  console.log(`List doesn't have ${n} nodes.`);
}
