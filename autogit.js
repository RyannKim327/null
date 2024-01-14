class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    // If the fast pointer catches up with the slow pointer, a cycle is present
    if (slow === fast) {
      return true;
    }
  }

  return false; // If we reach null, there is no cycle
}
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = null;

console.log(hasCycle(node1)); // Output: false

// Create a cycle in the linked list
node5.next = node2;

console.log(hasCycle(node1)); // Output: true
