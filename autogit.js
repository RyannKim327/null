class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function findNthNodeFromEnd(head, n) {
  if (!head) return null;

  let slow = head;
  let fast = head;

  // Move the fast pointer n positions ahead
  for (let i = 0; i < n; i++) {
    if (!fast) return null; // The length of the list is less than n
    fast = fast.next;
  }
  
  // Move both pointers at the same pace until the fast pointer reaches the end
  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }
  
  // The slow pointer is now pointing to the nth node from the end
  return slow.data;
}
const node5 = new Node(5);
const node4 = new Node(4, node5);
const node3 = new Node(3, node4);
const node2 = new Node(2, node3);
const node1 = new Node(1, node2);

console.log(findNthNodeFromEnd(node1, 2)); // Output: 4
