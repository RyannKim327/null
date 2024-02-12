function hasCycle(head) {
  if (!head || !head.next) {
    // An empty list or a list with only one node cannot have a cycle
    return false;
  }

  let slow = head; // Pointer that moves one node at a time
  let fast = head; // Pointer that moves two nodes at a time

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      // If the fast pointer catches up to the slow pointer, a cycle exists
      return true;
    }
  }

  // If the fast pointer reaches the end (null), no cycle exists
  return false;
}
// Define a linked list
class ListNode {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

// Create nodes
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);

// Connect nodes to form a cycle
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node2; // Creating a cycle

// Check if the linked list has a cycle
console.log(hasCycle(node1)); // Output: true
