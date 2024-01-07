class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function reverseLinkedList(head) {
  let current = head;
  let previous = null;

  while (current) {
    let nextNode = current.next;
    current.next = previous;
    previous = current;
    current = nextNode;
  }

  return previous;
}
// Create the linked list: 1 -> 2 -> 3 -> 4 -> 5
const node5 = new Node(5);
const node4 = new Node(4, node5);
const node3 = new Node(3, node4);
const node2 = new Node(2, node3);
const node1 = new Node(1, node2);

console.log("Original linked list:");
let current = node1;
while (current) {
  console.log(current.value);
  current = current.next;
}

const reversedHead = reverseLinkedList(node1);

console.log("Reversed linked list:");
current = reversedHead;
while (current) {
  console.log(current.value);
  current = current.next;
}
Original linked list:
1
2
3
4
5
Reversed linked list:
5
4
3
2
1
