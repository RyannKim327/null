class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function findMiddleElement(head) {
  if (head === null) {
    return null; // Empty list
  }

  let slow = head; // Slow pointer
  let fast = head; // Fast pointer

  while (fast !== null && fast.next !== null) {
    slow = slow.next; // Move slow pointer by one node
    fast = fast.next.next; // Move fast pointer by two nodes
  }

  return slow.data;
}

// Example usage:
const list = new Node(1);
list.next = new Node(2);
list.next.next = new Node(3);
list.next.next.next = new Node(4);
list.next.next.next.next = new Node(5);

const middle = findMiddleElement(list);
console.log(middle); // Output: 3
