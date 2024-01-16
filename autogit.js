class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverseLinkedList(head) {
  let prev = null;
  let current = head;
  let next = null;

  while (current !== null) {
    // Save the next node
    next = current.next;
    // Reverse the pointer of current node
    current.next = prev;
    // Move prev and current one step forward
    prev = current;
    current = next;
  }

  // prev will now be the new head of the reversed list
  return prev;
}
// Create a linked list
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);

node1.next = node2;
node2.next = node3;

// Reverse the linked list
const reversedHead = reverseLinkedList(node1);

// Print the reversed linked list
let current = reversedHead;
while (current !== null) {
  console.log(current.value);
  current = current.next;
}
3
2
1
