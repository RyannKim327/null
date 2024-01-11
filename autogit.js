class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findMiddleNode(head) {
  let slow = head;
  let fast = head;

  // Move the fast pointer two steps ahead and the slow pointer one step ahead
  // When the fast pointer reaches the end of the linked list, the slow pointer will be at the middle
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Return the middle node
  return slow;
}
// Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

// Find the middle node
const middleNode = findMiddleNode(head);

console.log(middleNode.value); // Output: 3
