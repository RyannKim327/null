class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findNthNodeFromEnd(head, n) {
  if (!head || n <= 0) {
    return null;
  }

  let slow = head;
  let fast = head;

  // Move the fast pointer n nodes ahead
  for (let i = 0; i < n; i++) {
    if (!fast) {
      return null; // n is greater than the length of the list
    }
    fast = fast.next;
  }

  // Move both pointers until the fast pointer reaches the end
  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}
// Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const n = 2; // Find the 2nd node from the end

const nthNodeFromEnd = findNthNodeFromEnd(head, n);
if (nthNodeFromEnd) {
  console.log(`The ${n}th node from the end is: ${nthNodeFromEnd.value}`);
} else {
  console.log(`The list is not long enough to find the ${n}th node from the end.`);
}
