class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    let nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }

  return prev;
}
// Create the linked list: 1 -> 2 -> 3 -> null
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);

console.log("Original Linked List:");
let current = head;
while (current !== null) {
  console.log(current.value);
  current = current.next;
}

// Reverse the linked list
const reversedHead = reverseLinkedList(head);

console.log("Reversed Linked List:");
current = reversedHead;
while (current !== null) {
  console.log(current.value);
  current = current.next;
}
Original Linked List:
1
2
3
Reversed Linked List:
3
2
1
