class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findNthFromEnd(head, n) {
  let slow = head;
  let fast = head;

  // Move the fast pointer n nodes ahead
  for (let i = 0; i < n; i++) {
    if (fast === null) {
      // The linked list has fewer than n nodes
      return null;
    }
    fast = fast.next;
  }

  // Move the slow and fast pointers together until fast reaches the end
  while (fast !== null) {
    slow = slow.next;
    fast = fast.next;
  }

  // At this point, slow is pointing to the nth node from the end
  return slow;
}

// Example usage:
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

const nthFromEnd = findNthFromEnd(head, 2);
console.log(nthFromEnd.value); // Output: 4
