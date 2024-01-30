function hasCycle(head) {
  // Initially, set both slow and fast pointers to the head node
  let slow = head;
  let fast = head;

  // Move slow pointer by one node and fast pointer by two nodes
  // If there's a cycle, they will eventually meet at the same node
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    // If the pointers meet, it indicates the presence of a cycle
    if (slow === fast) {
      return true;
    }
  }
  
  // If the loop completes without any cycle, return false
  return false;
}
// Define a linked list node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Create a sample linked list with a cycle
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // cycle

console.log(hasCycle(node1)); // Output: true
