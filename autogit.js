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

  // Update the head of the reversed list
  head = prev;

  return head;
}

// Sample linked list creation
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

console.log("Original linked list:");
let temp = head;
while (temp !== null) {
  console.log(temp.data);
  temp = temp.next;
}

head = reverseLinkedList(head);

console.log("Reversed linked list:");
temp = head;
while (temp !== null) {
  console.log(temp.data);
  temp = temp.next;
}
