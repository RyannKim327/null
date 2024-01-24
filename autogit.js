// Linked list node class
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Function to find the middle element of a linked list
function findMiddleElement(head) {
  let slowPtr = head;
  let fastPtr = head;

  while (fastPtr && fastPtr.next) {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next.next;
  }

  return slowPtr.val;
}

// Example usage
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log(findMiddleElement(head)); // Output: 3
