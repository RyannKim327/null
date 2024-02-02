function findMiddleElement(head) {
  // Initialize two pointers
  let slow = head;
  let fast = head;

  // Move the fast pointer two steps ahead and the slow pointer one step ahead
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // The slow pointer will be at the middle element
  return slow;
}
// Linked list node
class ListNode {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

// Create a linked list
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

// Find the middle element
const middleElement = findMiddleElement(head);
console.log(middleElement.val); // Output: 3
