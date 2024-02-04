function hasCycle(head) {
  if (!head || !head.next) {
    return false; // If the list is empty or has only one node, there can be no cycle
  }

  let slow = head; // The slow pointer moves one node at a time
  let fast = head; // The fast pointer moves two nodes at a time

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true; // If the slow and fast pointers meet, there is a cycle
    }
  }

  return false; // If the fast pointer reaches the end of the list, there is no cycle
}
// Linked List Node
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Creating a sample linked list with a cycle
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);

// Connect the nodes to form a linked list with a cycle
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node3; // This creates the cycle

console.log(hasCycle(node1)); // Output: true
