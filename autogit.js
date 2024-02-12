function hasCycle(head) {
  if (!head || !head.next) {
    // If the list is empty or has only one node, there can't be a cycle
    return false;
  }

  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    if (slow === fast) {
      // If the slow and fast pointers meet, there is a cycle
      return true;
    }

    slow = slow.next;
    fast = fast.next.next;
  }

  // If the fast pointer reaches the end (null), there is no cycle
  return false;
}
// Create a sample linked list with a cycle
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const head = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);

head.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node2; // Creates a cycle

console.log(hasCycle(head)); // Output: true
