function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    
    if (slow === fast) {
      return true; // Cycle detected
    }
  }

  return false; // No cycle
}
class ListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

// Create a linked list with a cycle
const node4 = new ListNode(4, null);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);
node4.next = node2; // Creating a cycle

console.log(hasCycle(node1)); // true, cycle exists
