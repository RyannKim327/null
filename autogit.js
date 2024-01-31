function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
// Create nodes
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

// Connect nodes to form a linked list
node1.next = node2;
node2.next = node3;
node3.next = node4;

// Set head as the starting node of the linked list
const head = node1;
// Reverse the linked list
const reversedHead = reverseLinkedList(head);

// Print the reversed linked list
let current = reversedHead;
while (current !== null) {
  console.log(current.data);
  current = current.next;
}
4
3
2
1
