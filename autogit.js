class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}
// Create a linked list: 1 -> 2 -> 3 -> 4 -> null
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

// Reverse the linked list
const reversedHead = reverseLinkedList(head);

// Traverse the reversed linked list and print the values
let current = reversedHead;
while (current !== null) {
  console.log(current.value);
  current = current.next;
}
4
3
2
1
