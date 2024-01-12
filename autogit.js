class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function reverseLinkedList(head) {
  let prev = null;
  let current = head;
  let next = null;

  while (current !== null) {
    // Store the next node
    next = current.next;

    // Reverse the pointer
    current.next = prev;

    // Move the pointers one position ahead
    prev = current;
    current = next;
  }

  // Return the new head of the reversed list
  return prev;
}

// Example usage:

// Create a linked list: 1 -> 2 -> 3 -> 4 -> null
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

// Reverse the linked list
const reversedHead = reverseLinkedList(head);

// Print the reversed linked list
let current = reversedHead;
while (current !== null) {
  console.log(current.value);
  current = current.next;
}
4
3
2
1
