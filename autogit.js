class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findMiddleElement(head) {
  // Initialize slow and fast pointers
  let slow = head;
  let fast = head;

  // Move fast pointer two steps ahead and slow pointer one step ahead
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // The slow pointer will be at the middle element
  return slow.value;
}

// Example usage
const list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);
list.next.next.next.next = new ListNode(5);

console.log(findMiddleElement(list)); // Output: 3
