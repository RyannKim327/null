class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function findMiddleElement(head) {
  if (head === null) {
    return null; // Empty list
  }

  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next; // Moves one node at a time
    fast = fast.next.next; // Moves two nodes at a time
  }

  return slow.value;
}

// Example usage:
const list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);
list.next.next.next.next = new ListNode(5);

const middle = findMiddleElement(list);
console.log(middle); // Output: 3
