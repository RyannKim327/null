class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function findNthNodeFromEnd(head, n) {
  let slow = head;
  let fast = head;

  // Move the fast pointer n nodes ahead
  for (let i = 0; i < n; i++) {
    if (fast === null) {
      return null; // There are less than n nodes in the list
    }
    fast = fast.next;
  }

  // Move both the slow and fast pointers until the fast pointer reaches the end
  while (fast !== null) {
    slow = slow.next;
    fast = fast.next;
  }

  // At this point, the slow pointer is at the nth node from the end
  return slow;
}
// Create a sample linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const n = 2;
const nthNodeFromEnd = findNthNodeFromEnd(head, n);

if (nthNodeFromEnd !== null) {
  console.log(`${n}th node from the end: ${nthNodeFromEnd.val}`);
} else {
  console.log(`There are less than ${n} nodes in the linked list.`);
}
