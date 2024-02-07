function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true; // Found a cycle
    }
  }

  return false; // No cycle found
}

// Example usage
class ListNode {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

// Create a linked list with a cycle
const head = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
head.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // Creates a cycle

console.log(hasCycle(head)); // Output: true
