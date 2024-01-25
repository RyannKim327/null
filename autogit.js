class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function findNthNodeFromEnd(head, n) {
  let fastPointer = head;
  let slowPointer = head;

  // Move fastPointer n positions ahead
  for (let i = 0; i < n; i++) {
    if (fastPointer === null) {
      // Linked list length is less than n
      return null;
    }
    fastPointer = fastPointer.next;
  }

  // Move both pointers simultaneously until fastPointer reaches the end
  while (fastPointer !== null) {
    fastPointer = fastPointer.next;
    slowPointer = slowPointer.next;
  }

  return slowPointer;
}

// Example usage
// Create a linked list: 1 -> 2 -> 3 -> 4 -> 5 -> null
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

// Find the 2nd node from the end
const n = 2;
const result = findNthNodeFromEnd(head, n);

if (result !== null) {
  console.log(`The ${n}th node from the end is: ${result.val}`);
} else {
  console.log(`Linked list length is less than ${n}`);
}
