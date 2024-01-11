class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverseLinkedList(head) {
  let current = head;
  let previous = null;
  let next = null;

  while (current !== null) {
    // Store the next node
    next = current.next;

    // Reverse the pointer of current node
    current.next = previous;

    // Move previous and current one step forward
    previous = current;
    current = next;
  }

  // Update the head to point to the last node (new first node)
  head = previous;

  return head;
}
// Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log("Original Linked List:");
printLinkedList(head);

const reversedHead = reverseLinkedList(head);

console.log("Reversed Linked List:");
printLinkedList(reversedHead);

function printLinkedList(head) {
  let current = head;
  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
}
Original Linked List:
1
2
3
4
5
Reversed Linked List:
5
4
3
2
1
