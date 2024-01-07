class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
let head = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);

head.next = node2;
node2.next = node3;
function reverseLinkedList(head) {
  let prev = null;
  let current = head;
  let next = null;

  while (current) {
    next = current.next; // Store the next node
    current.next = prev; // Reverse the current node's pointer
    prev = current; // Move prev one step forward
    current = next; // Move current one step forward
  }

  return prev; // The new head of the reversed linked list
}
let reversedHead = reverseLinkedList(head);
