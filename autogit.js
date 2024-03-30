class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true; // Cycle detected
    }
  }

  return false; // No cycle found
}

// Example usage
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
//node4.next = node2; // Uncomment to create a cycle

console.log(hasCycle(node1)); // Output: false
