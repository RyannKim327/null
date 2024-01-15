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
  let current = head;
  let prev = null;
  let next = null;

  while (current) {
    // Store the next node
    next = current.next;

    // Reverse the pointer
    current.next = prev;

    // Move prev and current one step forward
    prev = current;
    current = next;
  }

  // Set the new head as prev
  head = prev;

  // Return the reversed list
  return head;
}
const reversedHead = reverseLinkedList(node1);
