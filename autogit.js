class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true; // Cycle detected
    }
  }

  return false; // No cycle detected
}
// Create a linked list with a cycle
let head = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(5);

head.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node2; // Cycle back to node 2

console.log(hasCycle(head)); // Output: true

// Create a linked list without a cycle
let head2 = new ListNode(1);
let node6 = new ListNode(2);
let node7 = new ListNode(3);
let node8 = new ListNode(4);

head2.next = node6;
node6.next = node7;
node7.next = node8;

console.log(hasCycle(head2)); // Output: false
