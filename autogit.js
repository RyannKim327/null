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

const head = node1;
const tail = node3;
function reverseLinkedList(head) {
  let previous = null;
  let current = head;

  while (current !== null) {
    const next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
}
const reversedHead = reverseLinkedList(head);
