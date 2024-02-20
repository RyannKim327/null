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
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

// Example usage
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);

node1.next = node2;
node2.next = node3;

let head = node1;

console.log("Original linked list:");
let current = head;
while (current !== null) {
  console.log(current.value);
  current = current.next;
}

head = reverseLinkedList(head);

console.log("Reversed linked list:");
current = head;
while (current !== null) {
  console.log(current.value);
  current = current.next;
}
