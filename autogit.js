class ListNode {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

function getNthNodeFromEnd(head, n) {
  let ptr1 = head;
  let ptr2 = head;

  // Move ptr1 ahead by n steps
  for (let i = 0; i < n; i++) {
    if (ptr1 === null) {
      return null; // Out of bounds, n is larger than the list size
    }
    ptr1 = ptr1.next;
  }

  // Move both pointers until ptr1 reaches the end
  while (ptr1 !== null) {
    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
  }

  return ptr2; // ptr2 will be pointing to the nth node from the end
}
// Create the linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const n = 2; // Find the 2nd node from the end
const result = getNthNodeFromEnd(head, n);
console.log(result.val); // Output: 4
