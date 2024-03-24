class Node {
  constructor(value) {
    this.value = value;
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

  return prev; // Update the head of the reversed list
}

// Example usage
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);

console.log("Original Linked List:");
let current = head;
while (current !== null) {
  console.log(current.value);
  current = current.next;
}

head = reverseLinkedList(head);

console.log("\nReversed Linked List:");
current = head;
while (current !== null) {
  console.log(current.value);
  current = current.next;
}
