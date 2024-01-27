class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverseLinkedList(head) {
  let previous = null;
  let current = head;
  
  while (current !== null) {
    const nextNode = current.next;
    current.next = previous;
    
    previous = current;
    current = nextNode;
  }
  
  return previous;
}
// Create the linked list
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
