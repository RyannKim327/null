function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    let next = current.next; // Store the next node
    current.next = prev; // Reverse the link

    prev = current;
    current = next;
  }

  return prev; // Return the new head of the reversed list
}
// Define the Node class
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// Create the linked list: 1 -> 2 -> 3 -> 4 -> 5
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

// Reverse the linked list
let reversedHead = reverseLinkedList(head);

// Print the reversed linked list
let currentNode = reversedHead;
while (currentNode !== null) {
  console.log(currentNode.value);
  currentNode = currentNode.next;
}
