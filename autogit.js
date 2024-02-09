class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const findMiddleElement = (head) => {
  // Initialize two pointers
  let slow = head;
  let fast = head;

  // Move 'fast' pointer to the end of the list while 'slow' pointer moves half the speed
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Return the middle element
  return slow;
};
// Create the linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

// Find the middle element
const middleElement = findMiddleElement(head);
console.log(middleElement.value); // Output: 3
