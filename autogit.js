class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function hasCycle(head) {
  // Initialize slow and fast pointers
  let slow = head;
  let fast = head;

  // Move fast pointer by 2 steps and slow pointer by 1 step
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    // If there is a cycle, slow and fast pointers will meet at some point
    if (slow === fast) {
      return true;  // Cycle detected
    }
  }

  return false;  // No cycle found
}
// Create a linked list with a cycle
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // Cycle: 4 -> 2

console.log(hasCycle(node1));  // Output: true
