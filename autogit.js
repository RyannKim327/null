class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);

node1.next = node2;
node2.next = node3;
function reverseLinkedList(head) {
  let previous = null;
  let current = head;
  let next = null;

  while (current != null) {
    next = current.next;  // Save the next node
    current.next = previous;  // Reverse the link
    previous = current;
    current = next;
  }

  return previous;  // New head of the reversed list
}
const reversedHead = reverseLinkedList(node1);
