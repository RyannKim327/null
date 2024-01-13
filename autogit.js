class ListNode {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

const findMiddleElement = (head) => {
  let slow = head; // slow pointer
  let fast = head; // fast pointer

  while (fast !== null && fast.next !== null) {
    // Move slow pointer by one step
    slow = slow.next;
    // Move fast pointer by two steps
    fast = fast.next.next;
  }

  return slow.val; // Middle element
};

// Creating a linked list
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log(findMiddleElement(head)); // Output: 3
