function hasCycle(head) {
  if (!head || !head.next) {
    // If the list is empty or has only one node, there can't be a cycle
    return false;
  }

  let slow = head;   // Tortoise
  let fast = head;   // Hare

  while (fast && fast.next) {
    slow = slow.next;             // Move one step at a time
    fast = fast.next.next;        // Move two steps at a time

    if (slow === fast) {
      // If the two pointers meet, there is a cycle
      return true;
    }
  }

  // If we reach null/undefined, there is no cycle
  return false;
}
// Define the Node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Create a linked list with a cycle
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2;  // cycle 

console.log(hasCycle(node1)); // Output: true
