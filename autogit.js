class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function hasCycle(head) {
  let slow = head;  // Tortoise
  let fast = head;  // Hare

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    // If slow and fast meet at some point, a cycle exists
    if (slow === fast) {
      return true;
    }
  }

  // No cycle found
  return false;
}
// Create a linked list with a cycle
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node1;  // Cycle created by connecting the last node to the first

console.log(hasCycle(node1));  // Output: true
