class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function hasCycle(head) {
  if (!head || !head.next) {
    return false;
  }

  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    if (slow === fast) {
      return true;
    }
    
    slow = slow.next;
    fast = fast.next.next;
  }

  return false;
}
// Create a linked list with a cycle
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
node1.next = node2;
node2.next = node3;
node3.next = node1; // Cycle

console.log(hasCycle(node1)); // Output: true

// Create a linked list without a cycle
let newNode1 = new Node(1);
let newNode2 = new Node(2);
let newNode3 = new Node(3);
newNode1.next = newNode2;
newNode2.next = newNode3;

console.log(hasCycle(newNode1)); // Output: false
