function hasCycle(head) {
  let tortoise = head;
  let hare = head;

  while (hare !== null && hare.next !== null) {
    tortoise = tortoise.next;
    hare = hare.next.next;

    if (tortoise === hare) {
      return true; // Cycle detected
    }
  }

  return false; // No cycle found
}
// Linked List implementation
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
node4.next = node2; // creating a cycle

console.log(hasCycle(head)); // Output: true
