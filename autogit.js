// Define the linked list node
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Function to find the nth node from the end
function findNthFromEnd(head, n) {
  if (!head) {
    return null;
  }

  let ptr1 = head;
  let ptr2 = head;

  // Move ptr2 n nodes ahead
  for (let i = 0; i < n; i++) {
    if (!ptr2) {
      // The list has less than n nodes
      return null;
    }
    ptr2 = ptr2.next;
  }

  // Move both pointers until ptr2 reaches the end
  while (ptr2) {
    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
  }

  // ptr1 will be at the nth node from the end
  return ptr1;
}

// Example usage
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const n = 2;
const nthNode = findNthFromEnd(head, n);
console.log(`The ${n}th node from the end is ${nthNode ? nthNode.value : 'not found'}.`);
