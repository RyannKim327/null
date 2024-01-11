class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findNthFromEnd(head, n) {
  // Create two pointers
  let pointer1 = head;
  let pointer2 = head;

  // Move pointer2 n positions ahead
  for (let i = 0; i < n; i++) {
    if (pointer2 === null) return null; // Check if n is larger than the list size
    pointer2 = pointer2.next;
  }

  // Move both pointers until pointer2 reaches the end of the list
  while (pointer2 !== null) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }

  // pointer1 will be pointing to the nth node from the end
  return pointer1;
}

// Example usage:
// Create a linked list: 1 -> 2 -> 3 -> 4 -> 5 -> null
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const n = 2;
const nthFromEnd = findNthFromEnd(head, n);
console.log(`The ${n}th node from the end is:`, nthFromEnd);
