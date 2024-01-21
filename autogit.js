class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function findNthNodeFromEnd(head, n) {
  let slow = head;
  let fast = head;

  // Move fast pointer n steps ahead
  for (let i = 0; i < n; i++) {
    fast = fast.next;
    if (fast === null) {
      // Handle case where n exceeds the length of linked list
      return null;
    }
  }

  // Move slow and fast pointer together
  while (fast.next !== null) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}

// Testing the function
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const n = 2;
const nthNodeFromEnd = findNthNodeFromEnd(head, n);
if (nthNodeFromEnd !== null) {
  console.log(`The ${n}th node from the end is: ${nthNodeFromEnd.val}`);
} else {
  console.log(`The list does not contain ${n} nodes.`);
}
