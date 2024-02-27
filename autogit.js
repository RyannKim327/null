class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function reverseLinkedList(head) {
  let prev = null;
  let current = head;
  let next = null;

  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

// Example: Create a linked list and reverse it
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);

console.log("Original linked list:");
let current = head;
while (current !== null) {
  console.log(current.data);
  current = current.next;
}

head = reverseLinkedList(head);

console.log("Reversed linked list:");
current = head;
while (current !== null) {
  console.log(current.data);
  current = current.next;
}
