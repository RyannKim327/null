class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current) {
    const next = current.next;
    
    // Reverse the link
    current.next = prev;

    // Move to the next nodes
    prev = current;
    current = next;
  }

  // Return the new head of the reversed list
  return prev;
}
// Create the linked list: 1 -> 2 -> 3 -> 4 -> null
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

// Print the original linked list
let current = head;
while (current) {
  console.log(current.data);
  current = current.next;
}

console.log('Reversed Linked List');

// Reverse the linked list
const reversedHead = reverseLinkedList(head);

// Print the reversed linked list
current = reversedHead;
while (current) {
  console.log(current.data);
  current = current.next;
}
