function hasCycle(head) {
  // Initialize two pointers
  let slow = head;
  let fast = head;

  // Move the slow pointer by one step and the fast pointer by two steps
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    // If the two pointers meet, there is a cycle
    if (slow === fast) {
      return true;
    }
  }

  // If the fast pointer reaches the end of the list, there is no cycle
  return false;
}
// Node definition
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Create a linked list with a cycle
const head = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
head.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // Creating a cycle

console.log(hasCycle(head)); // Output: true
